'use client'

import React, {useEffect, useState} from "react"

import SignUpInput from "./SignUpInput"
import SocialLogin from "../socialLogin/SocialLogin"

import {
    SendAuthentication,
    CheckEmail,
    CheckPassword,
    CheckPasswordCheck,
    SubmitSignUp,
    CheckName
} from "@/utils/signUpUtils/SignUpUtil"


const SignUpForm = () => {
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordCheck, setPasswordCheck] = useState<string>("");
    const [emailSendButtonText, setEmailSendButtonText] = useState<string>("인증메일 받아보기");
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

    const handleSendAuthentication = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isEmailValid) {
            SendAuthentication(e, email);
            setEmailSendButtonText("인증메일 다시 받기");
        }
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        SubmitSignUp(e, email, name, password, passwordCheck);
    }

    useEffect(() => {
        const isEmailValid = CheckEmail(email) && (email.trim().length > 0);
        const isPasswordValid = CheckPassword(password) && (password.trim().length > 0);
        const isPasswordCheckValid = CheckPasswordCheck(password, passwordCheck) && (passwordCheck.trim().length > 0);
        const isNameValid = CheckName(name);
        setIsEmailValid(isEmailValid);
        setIsFormValid(isEmailValid && isPasswordValid && isPasswordCheckValid && isNameValid);
    }, [email, password, passwordCheck, name]);


    return (
        <main className="loginSignUp">
            <div className="mb-8">
                <SignUpInput name="signUpEmail" id="signUpEmail" label="이메일" placeholder="example@email.com"
                             type="email" onChange={setEmail} isValid={CheckEmail(email)} errorMsg="올바르지 않은 이메일 형식이에요"/>
                <button
                    className={`loginSignUpBtn font-normal ${isEmailValid ? '' : 'bg-blue-400 hover:bg-blue-400 cursor-not-allowed'}`}
                    onClick={handleSendAuthentication}>{emailSendButtonText}</button>
            </div>
            <div className="mb-8">
                <SignUpInput name="signUpPassword" id="signUpPassword" label="비밀번호" placeholder="********"
                             type="password" isValid={CheckPassword(password)} onChange={setPassword}
                             errorMsg="영문, 숫자, 특수문자 포함 8글자 이상으로 이루어져야합니다."/>
                <SignUpInput name="signUpPasswordCheck" id="signUpPasswordCheck" label="비밀번호확인" placeholder="********"
                             type="password" isValid={CheckPasswordCheck(password, passwordCheck)}
                             onChange={setPasswordCheck} errorMsg="동일한 비밀번호를 입력해주세요"/>
            </div>
            <SignUpInput name="signUpName" id="signUpName" label="닉네임" placeholder="닉네임"
                         type="text" isValid={CheckName(name)} onChange={setName} errorMsg="닉네임을 입력해주세요"/>
            <button
                className={`loginSignUpBtn mt-6 mb-2 font-normal ${isFormValid ? '' : 'bg-blue-400 hover:bg-blue-400 cursor-not-allowed'}`}
                onClick={handleSubmit} disabled={!isFormValid}>함께하기
            </button>
            <SocialLogin/>
        </main>
    )
}

export default SignUpForm;