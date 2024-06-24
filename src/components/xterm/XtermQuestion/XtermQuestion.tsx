"use client"

import React, { useState } from "react";
import useGetQuestion from "@/hooks/useGetQuestion";
import XtermQuestionStage from "./XtermQuestionStage";
import XtermQuestionDescription from "./XtermQuestionDescription";
import XtermQuestionAnswerInput from "./XtermQuestionAnswerInput";

interface XtermQuestionType {
    questionCount: number | undefined,
    accessToken: string | undefined,
    refreshToken: string | undefined,
}

const XtermQuestion: React.FC<XtermQuestionType> = ({ questionCount, accessToken, refreshToken }) => {
    const [question_index, setQusetion_index] = useState(1);
    const [showHint, setShowHint] = useState(false);
    const questionInfo = useGetQuestion(accessToken, refreshToken, question_index);

    const toggleHint = () => {
        setShowHint(!showHint);
    };

    const getHintURL = (questionId: number | undefined) => {
        switch (questionId) {
            case 52:
                return "https://www.ibm.com/docs/ko/aix/7.2?topic=l-ls-command";
            case 57:
                return "https://www.ibm.com/docs/en/z-netview/6.2.1?topic=statements-pwd";
            case 62:
                return "https://www.ibm.com/docs/ko/aix/7.2?topic=c-cat-command";
            case 67:
                return "https://www.ibm.com/docs/en/aix/7.2?topic=m-mkdir-command";
            case 73:
                return "https://www.ibm.com/docs/ko/aix/7.2?topic=c-cp-command";
            case 78:
                return "https://www.ibm.com/docs/ko/aix/7.3?topic=files-moving-renaming-mv-command";
            case 82:
                return "https://www.ibm.com/docs/ko/aix/7.3?topic=files-finding-find-command";
            case 87:
                return "https://www.ibm.com/docs/en/aix/7.2?topic=d-diff-command";
            case 93:
                return "https://www.ibm.com/docs/en/aix/7.2?topic=c-cut-command";
            case 98:
                return "https://www.ibm.com/docs/en/aix/7.2?topic=s-sort-command";
            case 100195:
                return "https://www.ibm.com/docs/ko/aix/7.2?topic=u-useradd-command";
            default:
                return "";
        }
    };

    const hintURL = getHintURL(Number(questionInfo?.questionId));


    return (
        <div className="bg-white flex-col items-center rounded-XtermQuestion-Radius z-100 h-XtermQuestion-height min-w-XtermQuestion-width rounded-rounded-10 relative">
            <div className="float-right pt-2 pr-2">
                <button className="headerBtn" onClick={toggleHint}>힌트</button>
            </div>
            {
                showHint && hintURL && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] h-[80%] relative">
                            <button
                                className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
                                onClick={toggleHint}
                            >
                                닫기
                            </button>
                            <iframe src={hintURL} className="w-full h-full mt-4" />
                        </div>
                    </div>
                )
            }
            <div className="bg-white flex-col items-center rounded-XtermQuestion-Radius z-10 h-XtermQuestion-height max-w-lg w-full rounded-rounded-10"> {/* w-full 추가 */}
                <XtermQuestionStage total_questions={questionCount || 0} question_index={question_index} />
                <XtermQuestionDescription title={questionInfo?.title} description={questionInfo?.description} />
                <XtermQuestionAnswerInput accessToken={accessToken} answerType={questionInfo?.answerType} question_index={question_index} setQusetion_index={setQusetion_index} />
            </div>
        </div >
    );

}

export default XtermQuestion;
