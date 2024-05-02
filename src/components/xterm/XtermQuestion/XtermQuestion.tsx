"use client"

import React,{useState} from "react";

import { useSearchParams } from 'next/navigation'

import useGetQuestion from "@/hooks/useGetQuestion";

import XtermQuestionStage from "./XtermQuestionStage";
import XtermQuestionDescription from "./XtermQuestionDescription";
import XtermQuestionAnswerInput from "./XtermQuestionAnswerInput";

interface XtermQuestionType {
    questionCount:number|undefined,
    accessToken: string | undefined,
    refreshToken: string | undefined,
}

const XtermQuestion:React.FC<XtermQuestionType> = ({questionCount,accessToken,refreshToken}) => {
    const [question_index,setQusetion_index] = useState(1);
    const questionInfo = useGetQuestion(accessToken,refreshToken,question_index)
    
    return (
        <div className="bg-white flex-col items-center rounded-XtermQuestion-Radius z-10 h-XtermQuestion-height min-w-XtermQuestion-width">
            <XtermQuestionStage total_questions={questionCount||0} question_index={question_index}/>
            <XtermQuestionDescription title={questionInfo?.title} desciption={questionInfo?.description}/>
            <XtermQuestionAnswerInput accessToken={accessToken} answerType={questionInfo?.answerType} question_index={question_index} setQusetion_index={setQusetion_index}/>
        </div>
    )
}


export default XtermQuestion