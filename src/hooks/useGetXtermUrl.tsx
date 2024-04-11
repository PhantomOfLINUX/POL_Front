import React from "react";

import { useSearchParams } from "next/navigation";

import useCheckAccess from "./useCheckAccess";

import { wrapPromise, Resource } from "@/lib/wrappingPromise";

interface useGetXtermUrlType {
    url:string,
    query:string
}

const url = process.env.NEXT_PUBLIC_BASE_API

function useGetXtermUrl( 
    accessToken:string|undefined,
    refreshToken:string|undefined,
    problemSolvedCheck:boolean|undefined,
    ModalCheck:boolean,
    XtermUrlCheck:boolean,
):Resource<useGetXtermUrlType> | undefined{
    const validAccessToken = useCheckAccess(accessToken, refreshToken);
    const searchParam = useSearchParams();
    const stageID = searchParam.get("stageId")
    let promise = undefined
    if(problemSolvedCheck&&!ModalCheck&&!XtermUrlCheck){//problemSolvedCheck&&ModalCheck true modal open, XtermUrlCheck false
        const postXtermUrl = fetch(`${url}/lab/terminal/stage/${stageID}`, {
            method:"POST",    
            headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization:`Bearer ${validAccessToken}`
                }
            }).then(res=> {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .catch(error=>console.error(error))
            promise = wrapPromise(postXtermUrl);
        }
    else if(!problemSolvedCheck||(problemSolvedCheck&&!ModalCheck&&XtermUrlCheck)){//problemSolvedCheck&&ModalCheck false modal open, XtermUrlCheck false
        const getXtermUrl = fetch(`${url}/lab/terminal/access-url/${stageID}`, {
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization:`Bearer ${validAccessToken}`
                }
            }).then(res=> {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .catch(error=>console.error(error))
            promise = wrapPromise(getXtermUrl);
        }
    return promise
}


export default useGetXtermUrl
