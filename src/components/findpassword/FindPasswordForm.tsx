'use client'
import {useEffect, useState} from "react";
import Link from "next/link";

import FindPasswordInput from "./FindPasswordInput";
import {GetTempAccessToken, SendAuthentication} from "@/utils/findPasswordUtils/FindPasswordUtil"

import useAuthStore from "@/store/authStore"
import {CheckEmail} from "@/utils/signUpUtils/SignUpUtil";
import {useRouter} from "next/navigation";


const FindPasswordForm = () => {
    const [email, setEmail] = useState<string>("")
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const {setToken} = useAuthStore();
    const router = useRouter();

    useEffect(() => {
        const isEmailValid = CheckEmail(email) && (email.trim().length > 0);
        setIsEmailValid(isEmailValid);
    },[email])

    const handleSendAuthentication = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isEmailValid) {
            SendAuthentication(e, email);
            GetTempAccessToken(e, email, setToken);
        }
    };

    const handleResetPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push("/resetpassword");
    };


    return (
        <main className="loginSignUp">
            <form action="#" className={"flex flex-col"}>
                <FindPasswordInput type="text" placeholder="이메일" onChange={setEmail}/>
                <button
                    className={`loginSignUpBtn ${isEmailValid ? '' : 'bg-blue-400 hover:bg-blue-400 cursor-not-allowed'}`}
                    onClick={handleSendAuthentication}
                >
                    인증메일 받아보기
                </button>
            </form>
            <button
                className={`loginSignUpBtn mt-16`}
                onClick={handleResetPassword}
            >
                <Link href={"/resetpassword"}>다음 단계로 넘어가기 //기능추가해야함</Link>
            </button>
        </main>
    )
}


export default FindPasswordForm;