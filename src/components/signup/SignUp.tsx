'use client'

import React,{useState} from "react"

import SignUpInput from "./SignUpInput"

import { SendAuthentication, CheckAuthentication, checkEmail, CheckName, CheckPassword, CheckPasswordCheck, } from "@/utils/SignUpUtils/SignUpUtil"


const SignUp = () => {
    const [email,setEmail] = useState<string>("")
    const [emailCertification,setEmailCertification] = useState<string>("")
    const [name,setName] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [passwordCheck,setPasswordCheck] = useState<string>("");

    return (
        <form>
            <SignUpInput label="이메일" placeholder="name@mail.com" type="email" onChange={setEmail} isVaild={checkEmail(email)} errorMsg="이메일 형식이 다릅니다."/>
            
            <button onClick={(e)=>SendAuthentication(e,email)}>인증번호 발송</button>

            <SignUpInput label="인증번호" placeholder="인증번호" type="text" onChange={setEmailCertification} errorMsg=""/>
            <button onClick={(e)=>CheckAuthentication(email,emailCertification)}>인증번호 제출</button>

            <SignUpInput label="닉네임" placeholder="닉네임" type="text" onChange={setName} isVaild={CheckName(name)} errorMsg="닉네임을 써주세요"/>
            <SignUpInput label="비밀번호" placeholder="****" type="password" isVaild={CheckPassword(password)} onChange={setPassword} errorMsg="비밀번호는 숫자, 문자, 기호 8글자 이상입니다."/>
            <SignUpInput label="비밀번호확인" placeholder="****" type="password" isVaild={CheckPasswordCheck(password, passwordCheck)} onChange={setPasswordCheck} errorMsg="비밀번호와 다릅니다"/>
                        
            <button>회원가입하기</button>
        </form>
    )
}

export default SignUp;

/*
onSubmit 할 때 체크할 것
1. 이메일과 이메일 인증번호 확인 
2. 이름 적혀있는지
3. 비밀번호 적혀 있고, 비밀번호와 비밀번호 확인이 맞는디
아래에 빨간 글씨로 주의 주기
onChange를 바꿔야 할듯? 
커링 함수 사용해서 onChange 사용해도 괜찮을듯?
onChange(setState,e,Instructions,조건)
조건
닉네임: 빈칸이 아니여야함
비밀번호: 비밀번호 형식에 맞아야함
비밀번호 확인: 비밀번호와 같아야함 -> 커링함수로 가자

조건은 css를 건들자.
error: 인증번호 누를시 아래 버튼도 같이 눌림
*/