"use client"

import React,{useState} from "react";

import { useSearchParams } from 'next/navigation'

import useGetQuestion from "@/hooks/useGetQuestion";

import XtermQuestionStage from "./XtermQuestionStage";
import XtermQuestionDescription from "./XtermQuestionDescription";
import XtermQuestionAnswerInput from "./XtermQuestionAnswerInput";

import { checkQuestion } from "@/utils/xtemrUtils/XtermUtils";

interface XtermQuestionType {
    accessToken: string | undefined,
    refreshToken: string | undefined,
}

const XtermQuestion:React.FC<XtermQuestionType> = ({accessToken,refreshToken}) => {
    const [question_index,setQusetion_index] = useState(1);
    const [isIncorrect,setIsIncorrect] = useState(false)
    const questionInfo = useGetQuestion(accessToken,refreshToken,question_index)
    const searchParams = useSearchParams();
    const stage_id = searchParams.get("stageId");
    const submitQuestion = (inputValue:string, e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        checkQuestion(inputValue,question_index,stage_id,accessToken,setQusetion_index,setIsIncorrect)
    }
    
    return (
        <div className="bg-white flex-col items-center rounded-XtermQuestion-Radius z-10 h-XtermQuestion-height min-w-XtermQuestion-width">
            <XtermQuestionStage total_questions={3} question_index={question_index}/>
            <XtermQuestionDescription title={questionInfo?.title} desciption={questionInfo?.description}/>
            <XtermQuestionAnswerInput submitQuestion={submitQuestion} answerType={questionInfo?.answerType} isIncorrect={isIncorrect}/>
        </div>
    )
}


export default XtermQuestion