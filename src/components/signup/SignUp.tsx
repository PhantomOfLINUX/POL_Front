'use client'

import React,{useState} from "react"

import SignUpInput from "./SignUpInput"
import GoogleOauth from "../oauth/GoogleOauth"

import { SendAuthentication, CheckAuthentication, checkEmail, CheckName, CheckPassword, CheckPasswordCheck, submitSignUp} from "@/utils/SignUpUtils/SignUpUtil"


const SignUp = () => {
    const [email,setEmail] = useState<string>("")
    const [emailCertification,setEmailCertification] = useState<string>("")
    const [name,setName] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [passwordCheck,setPasswordCheck] = useState<string>("");

    return (
        <main>
            <SignUpInput label="이메일" placeholder="name@mail.com" type="email" onChange={setEmail} isVaild={checkEmail(email)} errorMsg="이메일 형식이 다릅니다."/>
            <button onClick={(e)=>SendAuthentication(e,email)}>인증번호 발송</button>

            <SignUpInput label="인증번호" placeholder="인증번호" type="text" onChange={setEmailCertification} errorMsg=""/>
            <button onClick={(e)=>CheckAuthentication(e,email,emailCertification)}>인증번호 제출</button>

            <SignUpInput label="닉네임" placeholder="닉네임" type="text" onChange={setName} isVaild={CheckName(name)} errorMsg="닉네임을 써주세요"/>
            <SignUpInput label="비밀번호" placeholder="****" type="password" isVaild={CheckPassword(password)} onChange={setPassword} errorMsg="비밀번호는 숫자, 문자, 기호 8글자 이상입니다."/>
            <SignUpInput label="비밀번호확인" placeholder="****" type="password" isVaild={CheckPasswordCheck(password, passwordCheck)} onChange={setPasswordCheck} errorMsg="비밀번호와 다릅니다"/>

            <button onClick={(e=>submitSignUp(e,email,emailCertification,name,password,passwordCheck))}>회원가입하기</button>

            <GoogleOauth />
        </main>
    )
}

export default SignUp;