import React from "react";


interface XtermQuestionAnswerInputType {
    answerType: "SHORT_ANSWER"|"PRACTICAL"|undefined,
}

const XtermQuestionAnswerInput:React.FC<XtermQuestionAnswerInputType> = ({answerType}) => {
    return (
        <form className="ml-14 h-44">
            {answerType==="SHORT_ANSWER"&&
                <div className="loginSignUpInputContainer">
                    <input className="loginSignUpInput" placeholder="정답을 입력해주세요"/>
                </div>}
            <button className="loginSignUpBtn mt-5">정답 확인해보기</button>
        </form>
    )
}



export default XtermQuestionAnswerInput