const url =  process.env.NEXT_PUBLIC_BASE_API;

export const signInLocally = async (e:React.FormEvent<HTMLFormElement>,id:string,password:string) => {
    e.preventDefault();
    const signPost = {
        code:"",
        name:"",
        email:id,
        password:password
    }
    const AccessToken = await fetch(`${url}/api/sign-in/pol`,
    {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(signPost)});
    console.log(AccessToken);
}