"use client"

import React, { SetStateAction, useState } from "react";
import { useSearchParams } from 'next/navigation';
import { checkQuestion } from "@/utils/xtemrUtils/XtermUtils";
import XtermQuestionModal from "./XtermQuestionModal";
import useModalStore from '@/store/useModalStore'; // zustand 스토어 임포트

interface XtermQuestionAnswerInputType {
    answerType: "SHORT_ANSWER" | "PRACTICAL" | undefined,
    accessToken: string | undefined,
    question_index: number,
    setQusetion_index: React.Dispatch<SetStateAction<number>>
}

const XtermQuestionAnswerInput: React.FC<XtermQuestionAnswerInputType> = ({ accessToken, answerType, question_index, setQusetion_index }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [iscorrect, setIsCorrect] = useState(false);
    const searchParams = useSearchParams();
    const stage_id = searchParams.get("stageId");

    const { ModalCheck, setModalCheck } = useModalStore(); // zustand 스토어 사용

    const submitQuestion = (inputValue: string, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        checkQuestion(inputValue, question_index, stage_id, accessToken, setIsIncorrect, setModalCheck, setIsCorrect);
    }

    const goNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setQusetion_index(pre => pre + 1);
        setInputValue("");
        setIsCorrect(false);
    }

    
    return (
        <>
            <form className="flex flex-col items-center justify-center mx-14 h-44 overflow-hidden"> {/* 중앙 정렬을 위한 flex 설정 */}
                {answerType === "SHORT_ANSWER" &&
                    <div className="loginSignUpInputContainer w-full">
                        <input className={`loginSignUpInput ${iscorrect && "border-success-50 hover:border-success-50 focus:border-success-50"} transition-colors duration-500 ease-in-out`} placeholder="정답을 입력해주세요" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />

                    </div>}
                <button
                    className={`loginSignUpBtn mt-5 ${isIncorrect ? "animate-shake bg-danger-500 hover:bg-danger-500" : "bg-blue-500"} ${iscorrect && "bg-success-50 hover:bg-success-50"} transition-colors duration-500 ease-in-out w-full max-w-xs`} /* 버튼 중앙 정렬을 위한 width 설정 */
                    onClick={(e) => { submitQuestion(inputValue, e) }}
                    onAnimationEnd={(e) => { setIsIncorrect(false) }}>
                    정답 확인해보기
                </button>
                <button
                    className={`loginSignUpBtn mt-5 ${iscorrect ? "block" : "hidden"} w-full max-w-xs`} /* 버튼 중앙 정렬을 위한 width 설정 */
                    onClick={goNextStep}>
                    다음 문제로 넘어가기
                </button>
            </form>
            <XtermQuestionModal />
        </>
    );
}

export default XtermQuestionAnswerInput;