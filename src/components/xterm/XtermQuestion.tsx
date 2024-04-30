"use client"

import React,{useState} from "react";

import useGetQuestion from "@/hooks/useGetQuestion";

interface XtermQuestionType {
    accessToken: string | undefined,
    refreshToken: string | undefined,
}

const XtermQuestion:React.FC<XtermQuestionType> = ({accessToken,refreshToken}) => {
    const [question_index,setQusetion_index] = useState(1);
    const questionInfo = useGetQuestion(accessToken,refreshToken,question_index)
    return (
        <div className="bg-white rounded-XtermQuestion-Radius z-10 h-XtermQuestion-height min-w-XtermQuestion-width">
            asdasd
        </div>
    )
}


export default XtermQuestion