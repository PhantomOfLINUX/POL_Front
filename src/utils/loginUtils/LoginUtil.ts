const url =  process.env.NEXT_PUBLIC_BASE_API;

export const signInLocally = async (e:React.FormEvent<HTMLFormElement>,id:string,password:string) => {
    e.preventDefault();
    try{
    const loggedIn = await fetch(`${url}/api/login/pol`,{
        credentials: 'include',
        method:'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({        
            email:id,
            password:password
        }),
    }).then(res=>res.json());
    console.log(loggedIn)
    if(loggedIn.ok){
        alert("로그인에 성공하였습니다.")
        window.location.replace("/")
    }
    else{
        alert("아이디 또는 비밀번호가 맞지 않습니다.")
    }
    } catch(error){
        console.error("로그인 요청 중 오류 발생: ",error);
    }
}