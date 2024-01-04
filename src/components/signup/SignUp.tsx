'use client'

import React,{useRef} from "react"

import SignUpInput from "./SignUpInput"

const SignUp = () => {
    const EmailRef = useRef();
    const NameRef = useRef();
    const PasswordRef = useRef();
    const RePasswordRef = useRef();
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e)
    }
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;//유효성 체크
        console.log(e.target.value);
        if(exptext.test(e.target.value)){
            
        }
    }
    const onClick = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={onSubmit}>
            <SignUpInput label="이메일" placeholder="name@mail.com" type="email" onChange={onChange}/>
            <button onClick={onClick}>인증번호 발급</button>
            <SignUpInput label="닉네임" placeholder="닉네임" type="text" onChange={onChange}/>
            <SignUpInput label="비밀번호" placeholder="" type="password" onChange={onChange}/>
            <SignUpInput label="비밀번호확인" placeholder="" type="password" onChange={onChange}/>
            <button>회원가입하기</button>
        </form>
    )
}

export default SignUp;