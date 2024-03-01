'use client'
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import LoginInput from "./LoginInput";
import SocialLogin from "../socialLogin/SocialLogin";

import { LoginInLocally } from "@/utils/loginUtils/LoginUtil";
import useAuthStore from "@/store/authStore"

const LoginForm = () => {
    const router = useRouter();
    const [id,setId] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const {setToken} = useAuthStore();

    return (
        <main className="loginSignUp">
            <form onSubmit={e=>LoginInLocally(e,id,password,setToken,router)}>
                <LoginInput name="loginEmail" id="loginEmail" type="text" placeholder="이메일" onChange={setId}/>
                <LoginInput name="loginPassword" id="loginPassword" type="password" placeholder="비밀번호"  onChange={setPassword}/>
                <div className="flex justify-center">
                    <Link href="./findpassword" className="px-4 border-r border-black">비밀번호찾기</Link>
                    <Link href="/signup" className="px-4">회원가입하기</Link>
                </div>
                <button className="loginSignUpBtn mt-8">로그인</button>
                <SocialLogin/>
            </form>
        </main>
    )
}


export default LoginForm;