import React from "react";
import { logoutLocally } from "@/utils/logoutUtils/LogoutUtils"


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

// export const ResetPassword = async (e: React.MouseEvent<HTMLElement>, newPassword: string, newPasswordCheck: string, userToken: string | null) => {
//     e.preventDefault()
//     console.log("비밀번호 변경 테스트")
//     console.log("test", userToken, "test")

// }

export const ChangePassword = async (e: React.MouseEvent<HTMLElement>, userPassword: string, newPassword: string, accessToken: string) => {
    e.preventDefault();
    console.log(accessToken, "accessToken =", accessToken)
    console.log(userPassword, "userPassword =", userPassword)
    console.log(newPassword, "newPassword =", newPassword)
    console.log(userPassword, newPassword)

    try {
        const emailCheck = await fetch((`${url}/api/players/password`), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                rawPassword: userPassword,
                password: newPassword,
            }),
        });

        if (emailCheck.ok) {
            //console.log({ userToken });
            alert("비밀번호가 변경되었습니다.\n변경된 비밀번호로 다시 로그인 해주세요")

            window.location.replace("/")
            logoutLocally(accessToken);
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
