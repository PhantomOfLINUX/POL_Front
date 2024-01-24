const url =  process.env.NEXT_PUBLIC_BASE_API;


export const getGoogleUri = async () => {
    const googleLoginUri = await fetch(`${url}/api/oauth2/google-url`)
    return googleLoginUri;
}