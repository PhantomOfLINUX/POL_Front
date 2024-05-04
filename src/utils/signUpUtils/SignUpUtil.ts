import React from "react";

const url = process.env.NEXT_PUBLIC_BASE_API

export const CheckEmail = (e: string) => {
    const expect = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;//유효성 체크
    return !(e!==""&&!expect.test(e))
}//email check

export const SendAuthentication = async (e: React.MouseEvent<HTMLElement>, email: string): Promise<string> => {
    e.preventDefault();
    try {
        const emailCheck = await fetch(`${url}/api/auth/email/verification`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, type: "REGISTRATION"})
        });

        const responseBody = await emailCheck.json(); // 응답을 JSON 형태로 변환

        if (emailCheck.ok) {
            return "";
        } else if (responseBody.error === "4201_EMAIL_ALREADY_EXISTS_ERROR") {
            return "이미 사용중인 이메일이에요"
        } else {
            throw new Error(`Unexpected status code: ${emailCheck.status}`);
        }
    } catch (error) {
        console.error('무슨에러일까요?:', error);
        return "이메일 전송에 실패했어요. 다시 시도해주세요.";
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
        let SignUpCheck = await fetch((`${url}/api/auth/signup`),{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,email,password})
        })

        const responseBody = await SignUpCheck.json();

        if(SignUpCheck.ok){
            alert("회원가입에 성공하셨습니다.")
            window.location.replace("/login")
        }
        else if (responseBody.error === "4201_EMAIL_ALREADY_EXISTS_ERROR") {
            console.log(responseBody);
            return "이메일 인증이 완료되지 않았어요"
        }else {
            return "";
        }

    }
    else{
        console.log("형식이 맞지 않습니다.",!(name===""),CheckPassword(password),CheckPasswordCheck(password,passwordCheck))
    }
}
