const url =  process.env.NEXT_PUBLIC_BASE_API;

export const signInLocally = async (e:React.FormEvent<HTMLFormElement>,id:string,password:string) => {
    e.preventDefault();
    const AccessToken = await fetch(`${url}/api/sign-in/pol`,
    {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({        
            email:id,
            password:password
        })});
    console.log(AccessToken.json());
}