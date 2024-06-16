"use client"

import React, { SetStateAction, useState } from "react";

import { useSearchParams } from 'next/navigation'

import { checkQuestion } from "@/utils/xtemrUtils/XtermUtils";

import XtermQuestionModal from "./XtermQuestionModal"

interface XtermQuestionAnswerInputType {
    answerType: "SHORT_ANSWER" | "PRACTICAL" | undefined,
    accessToken: string | undefined,
    question_index: number,
    setQusetion_index: React.Dispatch<SetStateAction<number>>
}

const XtermQuestionAnswerInput: React.FC<XtermQuestionAnswerInputType> = ({ accessToken, answerType, question_index, setQusetion_index }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [isIncorrect, setIsIncorrect] = useState(false)
    const [ModalCheck, setModalCheck] = useState(false)
    const [iscorrect, setIsCorrect] = useState(false)
    const searchParams = useSearchParams();
    const stage_id = searchParams.get("stageId");

    const submitQuestion = (inputValue: string, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        checkQuestion(inputValue, question_index, stage_id, accessToken, setIsIncorrect, setModalCheck, setIsCorrect)
    }

    const goNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setQusetion_index(pre => pre + 1)
        setInputValue("")
        setIsCorrect(false)
    }


    return (
        <>
            <form className="flex-col justify-center mx-14 h-44 overflow-hidden">
                {answerType === "SHORT_ANSWER" &&
                    <div className="loginSignUpInputContainer">
                        <input className={`loginSignUpInput ${iscorrect && "border-success-50 hover:border-success-50 focus:border-success-50"} transition-colors duration-500 ease-in-out`} placeholder="정답을 입력해주세요" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
                    </div>}
                <button
                    className={`loginSignUpBtn mt-5 ${isIncorrect ? "animate-shake bg-danger-500 hover:bg-danger-500" : "bg-blue-500"} ${iscorrect && "bg-success-50 hover:bg-success-50"} transition-colors duration-500 ease-in-out`}
                    onClick={(e) => { submitQuestion(inputValue, e) }}
                    onAnimationEnd={(e) => { setIsIncorrect(false); }}>
                    정답 확인해보기
                </button>
                <button
                    className={`loginSignUpBtn mt-5 ${iscorrect ? "block" : "hidden"}`}
                    onClick={goNextStep}>
                    다음 문제로 넘어가기
                </button>
            </form>
            <XtermQuestionModal ModalCheck={ModalCheck} setModalState={setModalCheck} />
        </>
    )
}



export default XtermQuestionAnswerInput