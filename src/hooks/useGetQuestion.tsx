import React,{useEffect,useState} from "react";

import useCheckAccess from "./useCheckAccess";

import { useSearchParams } from 'next/navigation'

const url = process.env.NEXT_PUBLIC_BASE_API

interface QuestionReturn {
    questionId: string,
    index: 0,
    title: string,
    description: string,
    answerType: "SHORT_ANSWER"|"PRACTICAL",
    options: string[]
}

function useGetQuestion(
    accessToken:string|undefined,
    refreshToken:string|undefined,
    question_index:number, 
):QuestionReturn|undefined{
    const validAccessToken = useCheckAccess(accessToken, refreshToken);
    const searchParams = useSearchParams();
    const stage_id = searchParams.get("stageId");
    const [questionInfo,setQuestionInfo] = useState<QuestionReturn>({
            questionId: "",
            index: 0,
            title: "",
            description: "",
            answerType: "SHORT_ANSWER",
            options: [""] });
    useEffect(()=>{
        try{
            fetch(`${url}/api/stages/${stage_id}/questions/${question_index}`,{
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization:`Bearer ${validAccessToken}`
                }
            })
            .then((res)=>res.json())
            .then((res)=>{
                setQuestionInfo(res)
            })
            .catch((err:any)=>{
                console.log(err)        
            })

        }catch(err){
            console.error(err)
        }


    },[question_index,stage_id,validAccessToken])


    return questionInfo
}



export default useGetQuestion