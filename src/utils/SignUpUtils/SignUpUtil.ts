const url = process.env.NEXT_PUBLIC_BASE_API

export const checkEmail = (e:string) => {
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;//유효성 체크
    return e!==""&&!exptext.test(e)
}

export const SendAuthentication = async (e:React.MouseEvent<HTMLElement>,email:string) => {
    e.preventDefault()
    const check = await checkExistingEmail(email);
    if(check)
        submitEmail(email)
}//email 인증번호 보내는 코드

const checkExistingEmail = async (email: string): Promise<boolean> => {
    try {
      const response = await fetch(`${url}/api/sign-up/email/${email}`);
      if (response.status === 200) {
        return true; // 이메일이 존재함
      } else if (response.status === 400) {
        alert("가입된 아이디가 있습니다.");
        return false; // 이메일이 존재하지 않음
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Check existing email error:', error);
      return false;
    }
  };

const submitEmail = async (email:string) => {
    await fetch((`${url}/api/sign-up/email/${email}/verify`)) 
}

export const CheckAuthentication = async (email:string,emailAuth:string) => {
    const check = await fetch((`${url}/api/sign-up/mail/${email}/code/${emailAuth}`)).then(res=>res).catch(e=>console.log(e))
}


export const CheckName = (name:string) => name===""

export const CheckPassword = (password:string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//유효성 체크
    return password!==""&&!(passwordRegex.test(password))
}

export const CheckPasswordCheck = (password:string, passwordCheck:string) => passwordCheck!==""&&password!==passwordCheck;