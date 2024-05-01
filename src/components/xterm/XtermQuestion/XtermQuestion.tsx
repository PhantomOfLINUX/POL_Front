"use client"

import React,{useState} from "react";

import useGetQuestion from "@/hooks/useGetQuestion";

interface XtermQuestionType {
    accessToken: string | undefined,
    refreshToken: string | undefined,
}

const dummyData = {
    answerType: "MULTIPLE_CHOICE",
    description: "string",
    index: 1,
    options: ['string'],
    questionId: "Q013-001-M",
    title: "string1"
}

const XtermQuestion:React.FC<XtermQuestionType> = ({accessToken,refreshToken}) => {
    const [question_index,setQusetion_index] = useState(1);
    const questionInfo = useGetQuestion(accessToken,refreshToken,question_index)
    return (
        <div className="bg-white rounded-XtermQuestion-Radius z-10 h-XtermQuestion-height min-w-XtermQuestion-width">
            <p>{dummyData.title}</p>
            <span>{dummyData.description}</span>
        </div>
    )
}


export default XtermQuestion

/*
answerType: "MULTIPLE_CHOICE"
description: "string"
index: 1
options: ['string']
questionId: "Q013-001-M"
title: "string1"

*/