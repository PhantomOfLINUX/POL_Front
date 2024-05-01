"use client"

import React,{useState} from "react";

import useGetQuestion from "@/hooks/useGetQuestion";

import XtermQuestionStage from "./XtermQuestionStage";
import XtermQuestionDescription from "./XtermQuestionDescription";
import XtermQuestionAnswerInput from "./XtermQuestionAnswerInput";


interface XtermQuestionType {
    accessToken: string | undefined,
    refreshToken: string | undefined,
}

const XtermQuestion:React.FC<XtermQuestionType> = ({accessToken,refreshToken}) => {
    const [question_index,setQusetion_index] = useState(1);
    const questionInfo = useGetQuestion(accessToken,refreshToken,question_index)
    return (
        <div className="bg-white flex-col items-center rounded-XtermQuestion-Radius z-10 h-XtermQuestion-height min-w-XtermQuestion-width">
            <XtermQuestionStage total_questions={3} question_index={question_index}/>
            <XtermQuestionDescription title={questionInfo?.title} desciption={questionInfo?.description}/>
            <XtermQuestionAnswerInput answerType={questionInfo?.answerType}/>
        </div>
    )
}


export default XtermQuestion