'use client'
import { useState } from "react";
import Link from "next/link";

import LoginInput from "./LoginInput";
import { signInLocally } from "@/utils/loginUtils/LoginUtil";
import useAuthStore from "@/store/authStore"

const LoginForm = () => {
    const [id,setId] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const {setToken} = useAuthStore();
    return (
        <main className="loginSignUp">
        <form onSubmit={e=>signInLocally(e,id,password,setToken)}>
            <LoginInput type="text" placeholder="이메일" onChange={setId}/>
            <LoginInput type="password" placeholder="비밀번호"  onChange={setPassword}/>
            <div className="flex justify-center">
                <Link href="./findpassword" className="px-4 border-r border-black">비밀번호찾기</Link>
                <Link href="/signup" className="px-4">회원가입하기</Link>
            </div>
            <button className="loginSignUpBtn">로그인</button>
        </form>
        </main>
    )
}


export default LoginForm;