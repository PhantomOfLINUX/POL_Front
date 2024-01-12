const url = process.env.NEXT_PUBLIC_BASE_API

export const checkEmail = (e:string) => {
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;//유효성 체크
    return e!==""&&!exptext.test(e)
}

export const SendAuthentication = (e:React.MouseEvent<HTMLElement>,email:string) => {
    e.preventDefault()
    FetchAuthentication(email)
}//email 인증번호 보내는 코드

const FetchAuthentication = async (email:string) => {
    console.log("인증번호 발송")
    await fetch((`${url}/api/sign-up/mail/${email}`)).catch(e=>{
        console.log(e)
    });//응답값이 없다. 추후에 promise로 감쌀필요 있음
}//인증번호 체크 -> 길이가 짧을 경우 합쳐도 좋을 듯?


export const CheckAuthentication = async (email:string,emailAuth:string) => {
    const check = await fetch((`${url}/api/sign-up/mail/${email}/code/${emailAuth}`));//응답값이 없다. 추후에 promise로 감쌀필요 있음
    console.log(check)//email onChange -> email 잘못됐다고 하기
}


export const CheckName = (name:string) => name===""

export const CheckPassword = (password:string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//유효성 체크
    return password!==""&&!(passwordRegex.test(password))
}

export const CheckPasswordCheck = (password:string, passwordCheck:string) => passwordCheck!==""&&password!==passwordCheck;