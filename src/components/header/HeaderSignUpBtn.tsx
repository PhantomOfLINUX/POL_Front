'use client'
import Link from "next/link"

const HeaderSignUpBtn = () => {
    return (
        <button type="button">
            <Link href="/signup">회원가입</Link>
        </button>
    )
}


export default HeaderSignUpBtn