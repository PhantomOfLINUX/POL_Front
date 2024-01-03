'use client'

import React from "react"

import SignUpEmail from "./SignUpEmail"

const SignUp = () => {
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const onChnage = (e:React.ChangeEvent<HTMLInputElement>) => {
        const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;//유효성 체크
        if(!exptext.test(e.target.value)){
            console.log(e.target.value);
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <SignUpEmail label="이메일" placeholder="name@mail.com" onChange={onChnage}/>
            <label htmlFor="name">이름</label>
            <input type="text" id="name" name="name"/>
            <label htmlFor="">비밀번호</label>
            <input type="password" id="password" name="password"/>
            <label htmlFor="">비밀번호 확인</label>
            <input type="password" id="repassword" name="repassword"/>
            <button/>
        </form>
    )
}

export default SignUp;