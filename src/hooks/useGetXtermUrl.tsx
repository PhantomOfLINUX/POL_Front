import React,{useEffect,useState} from "react";

import { useSearchParams } from "next/navigation";

import useCheckAccess from "./useCheckAccess";


interface useGetXtermUrlType {
    url:string,
    query:string
}

const url = process.env.NEXT_PUBLIC_BASE_API

function useGetXtermUrl( 
    accessToken:string|undefined,
    refreshToken:string|undefined
):useGetXtermUrlType {
    const validAccessToken = useCheckAccess(accessToken, refreshToken);
    const searchParam = useSearchParams();
    const [xtermUrl, setXtermUrl] = useState<useGetXtermUrlType>({url:"",query:""});
    useEffect(()=>{
        const getXtermUrl = async () => {
            const stageID = searchParam.get("stageId")
            try{
                const xtermDataOk = await fetch(`${url}/lab/terminal/access-url/${stageID}`,{
                    headers:{
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization:`Bearer ${validAccessToken}`
                    }
                })
                const xtermData = await xtermDataOk.json();
                if(xtermDataOk.ok){
                    console.log(xtermData)
                    setXtermUrl(xtermData);
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