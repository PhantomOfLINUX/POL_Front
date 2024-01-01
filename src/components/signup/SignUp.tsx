'use client'

import React from "react"

const SignUp = () => {
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" name="email"/>
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