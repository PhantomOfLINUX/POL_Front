import React,{useEffect,useState} from "react";

import { useSearchParams } from "next/navigation";

import useCheckAccess from "./useCheckAccess";

import {getPlayerId} from "@/utils/xtermUtils/xtermUtils"

const url = process.env.NEXT_PUBLIC_BASE_API

function useGetXtermUrl( 
    accessToken:string|undefined,
    refreshToken:string|undefined
):string {
    const validAccessToken = useCheckAccess(accessToken, refreshToken);
    const searchParam = useSearchParams();
    const [xtermUrl, setXtermUrl] = useState<string>("");
    useEffect(()=>{
        const getXtermUrl = async () => {
            const stageID = searchParam.get("stageId")
            try{
                const xtermDataOk = await fetch(`${url}/lab/terminal/stage/${stageID}`,{
                    headers:{
                        Authorization:`Bearer ${validAccessToken}`
                    }
                })
                const xtermData = await xtermDataOk.json();
                if(xtermDataOk.ok){
                    console.log(xtermData);
                }
            }catch(error) {
                console.error(error)
            }
        }
        getXtermUrl()
    },[validAccessToken,searchParam])
    

    return xtermUrl
}


export default useGetXtermUrl