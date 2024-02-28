'use client'

import React,{useState} from "react"

import SignUpInput from "./SignUpInput"
import GoogleOauth from "../oauth/GoogleOauthButton"

import { SendAuthentication, checkEmail, CheckPassword, CheckPasswordCheck, SubmitSignUp} from "@/utils/signUpUtils/SignUpUtil"


const SignUpForm = () => {
    const [email,setEmail] = useState<string>("")
    const [name,setName] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [passwordCheck,setPasswordCheck] = useState<string>("");
    return (
        <main className="loginSignUp">
            <SignUpInput label="이메일" placeholder="name@mail.com" type="email" onChange={setEmail} isVaild={checkEmail(email)} errorMsg="이메일 형식이 아닙니다."/>
            <button className="loginSignUpBtn" onClick={(e)=>SendAuthentication(e,email)}>인증메일 받아보기</button>

            <SignUpInput label="닉네임" placeholder="닉네임" type="text" onChange={setName} errorMsg="닉네임을 써주세요"/>
            <SignUpInput label="비밀번호" placeholder="****" type="password" isVaild={CheckPassword(password)} onChange={setPassword} errorMsg="비밀번호는 숫자, 문자, 기호 8글자 이상입니다."/>
            <SignUpInput label="비밀번호확인" placeholder="****" type="password" isVaild={CheckPasswordCheck(password, passwordCheck)} onChange={setPasswordCheck} errorMsg="비밀번호와 다릅니다"/>

            <button className="loginSignUpBtn" onClick={(e=>SubmitSignUp(e,email,name,password,passwordCheck))}>함께하기</button>
            <GoogleOauth />
        </main>
    )
}

export default SignUpForm;