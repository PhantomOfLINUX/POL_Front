'use client'
import { useState } from "react";
import Link from "next/link";

import FindPasswordInput from "./FindPasswordInput";
import { GetTempAccessToken, SendAuthentication } from "@/utils/findPasswordUtils/FindPasswordUtil"

import useAuthStore from "@/store/authStore"


const FindPasswordForm = () => {
    const [email, setEmail] = useState<string>("")
    const { setToken } = useAuthStore();
    return (
        <main className="loginSignUp">
            <form action="#">
                <FindPasswordInput type="text" placeholder="이메일" onChange={setEmail} />
                <button className="loginSignUpBtn" onClick={(e) => { SendAuthentication(e, email), GetTempAccessToken(e, email, setToken) }}>
                    <Link href="/resetpassword">인증메일 받아보기</Link>
                </button>
            </form>
        </main>
    )
}


export default FindPasswordForm;