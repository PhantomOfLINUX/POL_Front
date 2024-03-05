const url =  process.env.NEXT_PUBLIC_BASE_API;

export const logoutLocally = (accessToken:string) => {
    try{
    fetch(`${url}/api/auth/logout`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization:`Bearer ${accessToken}`
        },
        credentials: 'include'
    }).then(response => {
        if (response.ok) {
            alert("로그아웃 되었습니다.")
            window.location.replace("/")
        }
        else{
            throw new Error(`뭔가 이상합니다.. ${response.status}`);
        }
        return response
    })
    }catch (error) {
        console.error('무슨에러일까요?:', error);
        return false;
    }
}