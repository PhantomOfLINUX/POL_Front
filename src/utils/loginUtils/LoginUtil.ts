const url =  process.env.NEXT_PUBLIC_BASE_API;

export const signInLocally = async (e:React.FormEvent<HTMLFormElement>,id:string,password:string) => {
    e.preventDefault();
    const loginData = await fetch(`${url}/api/login/pol`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({        
            email:id,
            password:password
        })
    }).then(res=>res.json());
    console.log(loginData)
}