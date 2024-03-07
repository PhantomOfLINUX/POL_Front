const url = process.env.NEXT_PUBLIC_BASE_API


export const getSocialLoginUrl = async (name:string) => {
    const socialUrl = await fetch(`${url}/api/auth/${name}/url`).then(res=>res.json())
    window.location.replace(socialUrl.response);
}