'use client'
import { useState } from "react";
import Link from "next/link";

import ChangePasswordInput, { changeType } from "./ChangePasswordInput";
import { ChangePassword, CheckPassword, CheckPasswordCheck } from "@/utils/changePasswordUtils/ChangePasswordUtils"
import useAuthStore from "@/store/authStore"

interface Props {
    accessToken: string;
}

const ChangePasswordForm: React.FC<Props> = ({ accessToken }) => {
    const [userPassword, setUserPassword] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [newPasswordCheck, setNewPasswordCheck] = useState<string>("")
    return (

        <main className="loginSignUp">
            <div>
                <form action="#">
                    <ChangePasswordInput label="기존 비밀번호" type="password" placeholder="기존 비밀번호" onChange={setUserPassword} isVaild={CheckPassword(userPassword)} errorMsg="비밀번호는 숫자, 문자, 기호 8글자 이상입니다." />
                    <ChangePasswordInput label="비밀번호" type="password" placeholder="새 비밀번호" onChange={setNewPassword} isVaild={CheckPassword(newPassword)} errorMsg="비밀번호는 숫자, 문자, 기호 8글자 이상입니다." />
                    <ChangePasswordInput label="비밀번호 확인" type="password" placeholder="새 비밀번호 확인" onChange={setNewPasswordCheck} isVaild={CheckPasswordCheck(newPassword, newPasswordCheck)} errorMsg="비밀번호와 다릅니다" />
                    <button className="loginSignUpBtn" onClick={(e) => { ChangePassword(e, userPassword, newPassword, accessToken) }}>
                        비밀번호 변경
                    </button>
                </form>
            </div>
        </main>
    )
}


export default ChangePasswordForm;