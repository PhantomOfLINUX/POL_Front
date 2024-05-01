import React,{useState,useEffect} from "react";
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> d5b907939b025104df84e8fa8a75886851253267
=======
>>>>>>> 219a885f9a4d2af241d5fe1cec44ddddd8f267dd

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
    const [promise,setPromise] = useState<Resource<useGetXtermUrlType> | undefined>(undefined)
    useEffect(()=>{
        if(problemSolvedCheck&&!ModalCheck&&!XtermUrlCheck){//problemSolvedCheck&&ModalCheck true modal open, XtermUrlCheck false
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
                setPromise(wrapPromise(getXtermUrl));
        }
        else if(!problemSolvedCheck||(problemSolvedCheck&&!ModalCheck&&XtermUrlCheck)){//problemSolvedCheck&&ModalCheck false modal open, XtermUrlCheck false
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
                setPromise(wrapPromise(postXtermUrl));
            }
    },[ModalCheck,XtermUrlCheck,problemSolvedCheck,,stageID,validAccessToken])
    return promise
}


export default useGetXtermUrl
