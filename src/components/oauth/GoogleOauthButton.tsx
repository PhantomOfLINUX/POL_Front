const GoogleUrl = process.env.NEXT_PUBLIC_GOOGLE_URL
import Link from "next/link"

const GoogleOauth = () => {

    return (
        <button>
            <Link href={`${GoogleUrl}`}>구글로그인</Link>
        </button>
    )

}


export default GoogleOauth