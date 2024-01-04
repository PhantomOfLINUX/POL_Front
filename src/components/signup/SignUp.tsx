'use client'

import React,{useState} from "react"

import SignUpInput from "./SignUpInput"

import { SendAuthentication } from "@/utils/SignUpUtils/SignUpUtil"
const SignUp = () => {
    const [email,setEmail] = useState<string>("")
    const [emailCertification,setEmailCertification] = useState<string>("")
    const [certificationBoolean,setcertificationBoolean] = useState<boolean>(true);
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const onChange = (e:string) => {
        
    }
    const onClick = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={onSubmit}>
            <SignUpInput label="이메일" placeholder="name@mail.com" type="email" onChange={setEmail} abled={false}/>
            <button onClick={(e)=>SendAuthentication(e,email,setcertificationBoolean)}>인증번호 발송</button>

            <SignUpInput label="인증번호" placeholder="인증번호" type="text" onChange={setEmailCertification} abled={certificationBoolean}/>
            <button onClick={onClick}>인증번호 제출</button>
            
            <SignUpInput label="닉네임" placeholder="닉네임" type="text" onChange={onChange} abled={false}/>
            <SignUpInput label="비밀번호" placeholder="****" type="password" onChange={onChange} abled={false}/>
            <SignUpInput label="비밀번호확인" placeholder="****" type="password" onChange={onChange} abled={false}/>
            
            <button>회원가입하기</button>
        </form>
    )
}

export default SignUp;