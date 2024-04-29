'use client'

import React,{useState} from "react"

import SignUpInput from "./SignUpInput"
import SocialLogin from "../socialLogin/SocialLogin"

import { SendAuthentication, checkEmail, CheckPassword, CheckPasswordCheck, SubmitSignUp} from "@/utils/signUpUtils/SignUpUtil"


const SignUpForm = () => {
    const [email,setEmail] = useState<string>("")
    const [name,setName] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [passwordCheck,setPasswordCheck] = useState<string>("");
    return (
        <main className="loginSignUp">
            <div className="mb-8">
                <SignUpInput name="signUpEmail" id="signUpEmail" label="이메일" placeholder="example@email.com" type="email" onChange={setEmail} isValid={checkEmail(email)} errorMsg="올바르지 않은 이메일 형식이에요"/>
                <button className="loginSignUpBtn" onClick={(e)=>SendAuthentication(e,email)}>인증메일 받아보기</button>
            </div>
            <div className="mb-8">
                <SignUpInput name="signUpPassword" id="signUpPassword" label="비밀번호" placeholder="********" type="password" isValid={CheckPassword(password)} onChange={setPassword} errorMsg="영문, 숫자, 특수문자 포함 8글자 이상으로 이루어져야합니다."/>
                <SignUpInput name="signUpPasswordCheck" id="signUpPasswordCheck" label="비밀번호확인" placeholder="********" type="password" isValid={CheckPasswordCheck(password, passwordCheck)} onChange={setPasswordCheck} errorMsg="동일한 비밀번호를 입력해주세요"/>
            </div>
            <SignUpInput name="signUpName" id="signUpName" label="닉네임" placeholder="닉네임" type="text" onChange={setName} errorMsg="닉네임을 입력해주세요"/>
            <button className="loginSignUpBtn mt-8" onClick={(e=>SubmitSignUp(e,email,name,password,passwordCheck))}>함께하기</button>
            <SocialLogin/>
        </main>
    )
}

export default SignUpForm;