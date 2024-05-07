import React,{useEffect,useState} from "react";

import useCheckAccess from "./useCheckAccess";

import { useSearchParams } from 'next/navigation'

const url = process.env.NEXT_PUBLIC_BASE_API

function useGetQuestionCount(
    accessToken:string|undefined,
    refreshToken:string|undefined,
):number|undefined{
    const validAccessToken = useCheckAccess(accessToken, refreshToken);
    const searchParams = useSearchParams();
    const stage_id = searchParams.get("stageId");
    const [questionCount,setQuestionCount] = useState<number>(0);
    useEffect(()=>{
        try{
            fetch(`${url}/api/stages/${stage_id}`,{
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization:`Bearer ${validAccessToken}`
                }
            })
            .then((res)=>res.json())
            .then((res)=>{
                setQuestionCount(res.questionCount)
            })
            .catch((err:any)=>{
                console.log(err)        
            })

        }catch(err){
            console.error(err)
        }
    },[stage_id,validAccessToken])


    return questionCount
}



export default useGetQuestionCount