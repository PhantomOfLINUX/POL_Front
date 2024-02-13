'use client'
import Link from "next/link"


const HeaderLoginBtn = () => {
    return (
        <button type="button">
            <Link href="/login">로그인</Link>
        </button>
    )
}

export default HeaderLoginBtn