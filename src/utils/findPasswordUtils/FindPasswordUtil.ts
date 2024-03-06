
import { getToken } from "next-auth/jwt";
import React from "react";
import { TokenSetter } from "@/store/authStore"

const url = process.env.NEXT_PUBLIC_BASE_API

export const checkEmail = (e: string) => {
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;//유효성 체크
    return e !== "" && !exptext.test(e)
}//email check


export const SendAuthentication = async (e: React.MouseEvent<HTMLElement>, email: string) => {
    e.preventDefault()
    try {
        const emailCheck = await fetch((`${url}/api/auth/email/verification`), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, type: "PASSWORD_RESET" })
        });
        if (emailCheck.ok) {
            alert("이메일이 전송되었습니다.")
        }
        else if (emailCheck.status === 400) {
            alert("이미 존재한 이메일입니다.")
        }
        else {
            throw new Error(`Unexpected status code: ${emailCheck.status}`);
        }
    } catch (error) {
        console.error('무슨에러일까요?:', error);
        return false;
    }
}//email 인증

export const GetTempAccessToken = async (e: React.MouseEvent<HTMLElement>, email: string, setToken: TokenSetter) => {
    e.preventDefault()
    try {
        const emailCheck = await fetch((`${url}/api/auth/access/${email}/temp`), {
            method: 'GET',
        }).then((response) => response.json())
            .then((response) => setToken(response.accessToken))


        // if (emailCheck.ok) {
        //     alert("이메일이 전송되었습니다.")
        // }
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