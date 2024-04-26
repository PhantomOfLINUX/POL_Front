import React,{useEffect,useState} from "react";

const url = process.env.NEXT_PUBLIC_BASE_API


function useCheckAccess(
    accessToken:string|undefined,
    refreshToken:string|undefined,
):string|undefined {
    const [conditionAccessToken,setConditionAccessToken] = useState<string|undefined>(accessToken)
    useEffect(()=> {
        const checkAccessToken = async () => {
            try{
                if(accessToken===""){
                    const submitedAccessToken = await fetch(`${url}/api/auth/refresh`,{
                        method:"POST",
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            Authorization:`Bearer ${accessToken}`
                        },
                        body:JSON.stringify({refreshToken})
                    }).then(res=>res.json())
                    setConditionAccessToken(submitedAccessToken.refreshToken)//refreshToken 만료시 고민
                }
            } catch(error) {
                console.error(error)
            }
        }
        checkAccessToken();
    },[accessToken,refreshToken])
    return conditionAccessToken
}

export default useCheckAccess