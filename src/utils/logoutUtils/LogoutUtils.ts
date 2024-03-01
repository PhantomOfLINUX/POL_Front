import {TokenSetter} from "@/store/authStore"
const url =  process.env.NEXT_PUBLIC_BASE_API;
export const loginLocally = (accessToken:string|null,setToken:TokenSetter) => {
    try{
    fetch(`${url}/api/auth/logout`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessToken}`
        },
    }).then(response => {
        console.log(response)
        if (response.ok) {
            setToken(null)
            localStorage.removeItem("refreshToken")
            alert("로그아웃 되었습니다.")
        }
        else{
            throw new Error(`뭔가 이상합니다..`);
        }
    })
    }catch (error) {
        console.error('무슨에러일까요?:', error);
        return false;
    }
}