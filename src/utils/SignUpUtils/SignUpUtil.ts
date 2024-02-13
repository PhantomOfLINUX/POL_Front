import React from "react";

const url = process.env.NEXT_PUBLIC_BASE_API

export const checkEmail = (e:string) => {
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;//유효성 체크
    return e!==""&&!exptext.test(e)
}//email check

export const SendAuthentication = async (e:React.MouseEvent<HTMLElement>,email:string) => {
    e.preventDefault()
    const emailCheck = await checkExistingEmail(email);
    if(emailCheck)
        submitEmail(email)
}//email 인증번호 보내는 코드

const checkExistingEmail = async (email: string): Promise<boolean> => {
    try {
        const response = await fetch(`${url}/api/signup/email/${email}`);
        if (response.status === 200) {
            return true; // 이메일이 존재함
        } else if (response.status === 400) {
            alert("가입된 아이디가 있습니다.");
            return false; // 이메일이 존재하지 않음
        } else {
            throw new Error(`Unexpected status code: ${response.status}`);
        }
    } catch (error) {
      console.error('무슨에러일까요?:', error);
      return false;
    }
  };

const submitEmail = async (email:string) => {
    await fetch((`${url}/api/signup/email/${email}/verify`))
    alert("인증번호가 이메일에 전송되었습니다.")
}

export const CheckAuthentication = async (e:React.MouseEvent<HTMLElement>,email:string,emailAuth:string) => {
    e.preventDefault()
    const authenticationCheck = await fetch((`${url}/api/sign-up/email/${email}/code/${emailAuth}`))
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
        let SignUpcheck = await fetch((`${url}/api/signup/pol`),{
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
