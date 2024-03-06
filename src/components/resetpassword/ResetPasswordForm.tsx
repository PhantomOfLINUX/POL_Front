'use client'
import { useState } from "react";
import Link from "next/link";

import ResetPasswordInput from "./ResetPasswordInput";
import { ResetPassword, CheckPassword, CheckPasswordCheck } from "@/utils/resetPasswordUtils/ResetPasswordUtil"
import useAuthStore from "@/store/authStore"

const ResetPasswordForm = () => {
    const { userToken } = useAuthStore();
    const [newPassword, setNewPassword] = useState<string>("")
    const [newPasswordCheck, setNewPasswordCheck] = useState<string>("")

    const [tempToken, setTempToken] = useState<string | null>(null);

    return (
        <main className="loginSignUp">
            <form action="#">
                <ResetPasswordInput label="비밀번호" type="password" placeholder="새 비밀번호" onChange={setNewPassword} isVaild={CheckPassword(newPassword)} errorMsg="비밀번호는 숫자, 문자, 기호 8글자 이상입니다." />
                <ResetPasswordInput label="비밀번호 확인" type="password" placeholder="새 비밀번호 확인" onChange={setNewPasswordCheck} isVaild={CheckPasswordCheck(newPassword, newPasswordCheck)} errorMsg="비밀번호와 다릅니다" />
                <button className="loginSignUpBtn" onClick={(e) => { ResetPassword(e, newPassword, newPasswordCheck, userToken) }}>
                    비밀번호 변경
                </button>
            </form>
        </main>
    )
}


export default ResetPasswordForm;