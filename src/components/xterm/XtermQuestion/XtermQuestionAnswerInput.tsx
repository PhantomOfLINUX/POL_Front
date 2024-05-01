"use client"

import React,{useState} from "react";


interface XtermQuestionAnswerInputType {
    answerType: "SHORT_ANSWER"|"PRACTICAL"|undefined,
    submitQuestion:(inputValue:string,e:React.MouseEvent<HTMLButtonElement>) => void,
    isIncorrect:boolean
}

const XtermQuestionAnswerInput:React.FC<XtermQuestionAnswerInputType> = ({answerType,submitQuestion,isIncorrect}) => {
    const [inputValue,setInputValue] = useState<string>("");
    return (
        <form className="ml-14 h-44">
            {answerType==="SHORT_ANSWER"&&
                <div className="loginSignUpInputContainer">
                    <input className="loginSignUpInput" placeholder="정답을 입력해주세요" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
                </div>}
            <button className={`loginSignUpBtn mt-5 ${isIncorrect?"animation-shake bg-danger-500":""}`} onClick={(e)=>{submitQuestion(inputValue,e)}}>정답 확인해보기</button>
        </form>
    )
}



export default XtermQuestionAnswerInput