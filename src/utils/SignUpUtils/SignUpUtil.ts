export const SendAuthentication = (e:React.MouseEvent<HTMLElement>,email:string,setcertificationBoolean:(e:boolean)=>void) => {
    e.preventDefault()
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;//유효성 체크
    if(exptext.test(email)){
        setcertificationBoolean(false);
    }
}