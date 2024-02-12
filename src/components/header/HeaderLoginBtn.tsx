'use client'
import Link from "next/link"


const HeaderLoginBtn = () => {
    return (
        <button type="button">
            <Link href="/login">로그인</Link>
        </button>
    )
}

//모달창 생성
export default HeaderLoginBtn