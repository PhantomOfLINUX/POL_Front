import React from "react";

const url = process.env.NEXT_PUBLIC_BASE_API

export const CheckEmail = (e: string) => {
    const expect = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;//유효성 체크
    return !(e!==""&&!expect.test(e))
}//email check

export const SendAuthentication = async (e:React.MouseEvent<HTMLElement>,email:string) => {
    e.preventDefault()
    try{
    const emailCheck = await fetch((`${url}/api/auth/email/verification`),{ 
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email,type: "REGISTRATION"})});
        if(emailCheck.ok){
            alert("이메일이 전송되었습니다.")
        }
        else if(emailCheck.status===400){
            alert("이미 사용중인 이메일입니다.")
        }
        else{
            throw new Error(`Unexpected status code: ${emailCheck.status}`);
        }
    }
        catch (error) {
            console.error('무슨에러일까요?:', error);
            return false;
        }
}//email 인증

export const CheckPassword = (password:string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;//유효성 체크
    return !(password!==""&&!(passwordRegex.test(password)))
}

export const CheckPasswordCheck = (password: string, passwordCheck: string) => !(passwordCheck !== "" && password !== passwordCheck);

export const CheckName = (name: string) => (name.trim().length > 0);

export const SubmitSignUp = async (e:React.MouseEvent<HTMLElement>,email:string,name:string,password:string,passwordCheck:string) => {
    e.preventDefault();
    if((name!==""&&/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)&&password===passwordCheck)){
        let SignUpcheck = await fetch((`${url}/api/auth/signup`),{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,email,password})
        })
        if(SignUpcheck.ok){
            alert("회원가입에 성공하셨습니다.")
            window.location.replace("/login")
        }
        else
            console.log(SignUpcheck)
    }
    else{
        console.log("형식이 맞지 않습니다.",!(name===""),CheckPassword(password),CheckPasswordCheck(password,passwordCheck))
    }
}
