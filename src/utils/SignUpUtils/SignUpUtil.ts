const url = process.env.NEXT_PUBLIC_BASE_API

export const SendAuthentication = (e:React.MouseEvent<HTMLElement>,email:string,setcertificationBoolean:(e:boolean)=>void) => {
    e.preventDefault()
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;//유효성 체크
    if(exptext.test(email)){
        FetchAuthentication(email)
        setcertificationBoolean(false);
    }
    else
        setcertificationBoolean(true);
}

const FetchAuthentication = async (email:string) => {
    await fetch((`${url}/api/sign-up/mail/${email}`));//응답값이 없다. 추후에 promise로 감쌀필요 있음
}

export const CheckAuthentication = async (email:string,emailAuth:string) => {
    const check = await fetch((`${url}/api/sign-up/mail/${email}/code/${emailAuth}`));//응답값이 없다. 추후에 promise로 감쌀필요 있음
    console.log(check.json)
}