'use client'
import Link from "next/link"

const HeaderSignUpBtn = () => {
    return (

        <button type="button" className="w-24 h-12 bg-thema-color text-white rounded mr-20 mt-10">
            <Link href="/signup">회원가입</Link>
        </button>
    )
}


export default HeaderSignUpBtn