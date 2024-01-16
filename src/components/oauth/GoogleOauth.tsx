'use client'

const url = process.env.NEXT_PUBLIC_BASE_API


const GoogleOauth = () => {

    return (
        <button onClick={ async (e)=>{
            e.preventDefault();
            const check = await fetch(`${url}/api/oauth2/google-url`)
            console.log(check)
        }}>
            구글로그인
        </button>
    )

}


export default GoogleOauth