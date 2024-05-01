import React from "react";


const ResetPasswordDescription = () => {
    return (
        <div className="w-screen flex flex-col text-center mt-10 mb-10 space-y-2">
            <p className="text-gray-900 font-light text-4xl">
                <span className="text-blue-600 font-bold mb-20">비밀번호</span> 변경하기<br/>
            </p>
            <div className="h-12"></div>
            <p className="text-gray-700 font-light text-lg">새로 사용하실 비밀번호를 입력해주세요</p>
            <p className="text-gray-700 font-light text-lg">영어 소문자와 숫자, 특수문자로 8글자 이상으로 만들어야 해요</p>
        </div>
    )
}


export default ResetPasswordDescription
