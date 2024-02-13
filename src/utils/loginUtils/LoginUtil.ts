const url =  process.env.NEXT_PUBLIC_BASE_API;

export const signInLocally = async (e:React.FormEvent<HTMLFormElement>,id:string,password:string) => {
    e.preventDefault();
    const loggedIn = await fetch(`${url}/api/login/pol`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({        
            email:id,
            password:password
        })
    });
    if(loggedIn.ok){
        alert("로그인에 성공하였습니다.")
        window.location.replace("/")
    }
    else{
        alert("아이디 또는 비밀번호가 맞지 않습니다.")
    }
}