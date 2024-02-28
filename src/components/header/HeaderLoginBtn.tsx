'use client'
import Link from "next/link"


const HeaderLoginBtn = () => {
    return (

        <button type="button" className="w-24 h-12 bg-thema-color text-white rounded mt-10 mr-4">
            <Link href="/login">로그인</Link>
        </button>

    )
}

export default HeaderLoginBtn