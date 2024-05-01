"use client"

import React,{SetStateAction, useState} from "react";

import { useSearchParams } from 'next/navigation'

import { checkQuestion } from "@/utils/xtemrUtils/XtermUtils";


interface XtermQuestionAnswerInputType {
    answerType: "SHORT_ANSWER"|"PRACTICAL"|undefined,
    accessToken: string | undefined,
    question_index:number,
    setQusetion_index:React.Dispatch<SetStateAction<number>>
}

const XtermQuestionAnswerInput:React.FC<XtermQuestionAnswerInputType> = ({accessToken,answerType,question_index,setQusetion_index}) => {
    const [inputValue,setInputValue] = useState<string>("");
    const [isIncorrect,setIsIncorrect] = useState(false)
    const searchParams = useSearchParams();
    const stage_id = searchParams.get("stageId");

    const submitQuestion = (inputValue:string, e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        checkQuestion(inputValue,question_index,stage_id,accessToken,setQusetion_index,setIsIncorrect,setInputValue)
    }
    return (
        <form className="ml-14 h-44">
            {answerType==="SHORT_ANSWER"&&
                <div className="loginSignUpInputContainer">
                    <input className="loginSignUpInput" placeholder="정답을 입력해주세요" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
                </div>}
            <button 
                className={`loginSignUpBtn mt-5 ${isIncorrect?"animate-shake bg-danger-500":"bg-blue-500"} transition-colors duration-500 ease-in-out`} 
                onClick={(e)=>{submitQuestion(inputValue,e)}}
                onAnimationEnd={(e)=>{setIsIncorrect(false)}}
            >정답 확인해보기</button>
        </form>
    )
}



export default XtermQuestionAnswerInput