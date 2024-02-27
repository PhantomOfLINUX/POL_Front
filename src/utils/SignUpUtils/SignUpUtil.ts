import { off } from "process";
import React from "react";

const url = process.env.NEXT_PUBLIC_BASE_API

export const checkEmail = (e:string) => {
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;//유효성 체크
    return e!==""&&!exptext.test(e)
}//email check

export const SendAuthentication = async (e:React.MouseEvent<HTMLElement>,email:string) => {
    e.preventDefault()
    try{
    const emailCheck = await fetch((`${url}/api/auth/email/${email}/verification`));
    if(emailCheck.ok){
        alert("이메일이 전송되었습니다.")
    }
    else if(emailCheck.status===400){
        alert("이미 존재한 이메일입니다.")
    }
    else{
        throw new Error(`Unexpected status code: ${emailCheck.status}`);
    }
    }catch (error) {
        console.error('무슨에러일까요?:', error);
        return false;
    }
}//email 인증

export const CheckAuthentication = async (e:React.MouseEvent<HTMLElement>,email:string,emailAuth:string) => {
    e.preventDefault()
    const authenticationCheck = await fetch((`${url}/api/auth/email/${email}/code/${emailAuth}`))
    if(authenticationCheck){
        alert("인증번호가 맞습니다.")
    }
    else{
        alert("이메일 인증코드가 불일치합니다.")
    }
}


export const CheckName = (name:string) => name===""

export const CheckPassword = (password:string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;//유효성 체크
    return password!==""&&!(passwordRegex.test(password))
}

export const CheckPasswordCheck = (password:string, passwordCheck:string) => passwordCheck!==""&&password!==passwordCheck;

export const submitSignUp = async (e:React.MouseEvent<HTMLElement>,email:string,code:string,name:string,password:string,passwordCheck:string) => {
    e.preventDefault();
    if((name!==""&&/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)&&password===passwordCheck)){
        let SignUpcheck = await fetch((`${url}/api/auth/signup`),{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({code,name,email,password})
        })
        if(SignUpcheck.ok){
            alert("회원가입에 성공하셨습니다.")
            window.location.replace("/login")
        }
        else
            console.log(SignUpcheck)
    }
    else{
        console.log("형식이 맞지 않습니다.",!CheckName(name),CheckPassword(password),CheckPasswordCheck(password,passwordCheck))
    }
}
