import React from "react";
import { TokenSetter } from "@/store/authStore"
import { getToken } from "next-auth/jwt";
import { useState } from "react";


const url = process.env.NEXT_PUBLIC_BASE_API

export const checkEmail = (e: string) => {
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;//유효성 체크
    return e !== "" && !exptext.test(e)
}//email check

export const CheckPassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;//유효성 체크
    return password !== "" && !(passwordRegex.test(password))
}


export const CheckPasswordCheck = (password: string, passwordCheck: string) => passwordCheck !== "" && password !== passwordCheck;


export const ResetPassword = async (e: React.MouseEvent<HTMLElement>, newPassword: string, newPasswordCheck: string, userToken: string | null) => {
    e.preventDefault()
    try {
        const emailCheck = await fetch((`${url}/api/players/password`), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userToken}`
            },
            body: JSON.stringify({
                password: newPassword
            }),
        });
        console.log(userToken)
        if (emailCheck.ok) {
            //console.log({ userToken });
            alert("비밀번호가 변경되었습니다.")
            window.location.replace("/")
        }
        // else if (emailCheck.status === 400) {
        //     alert("이미 존재한 이메일입니다.")
        // }
        // else {
        //     throw new Error(`Unexpected status code: ${emailCheck.status}`);
        // }
    } catch (error) {
        console.error('무슨에러일까요?:', error);
        return false;
    }
}//email 인증
