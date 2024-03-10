import React from "react";
import Link from "next/link"

const mypage = () => {

    return (
        <button type="button">
            <Link href="/changepassword">비밀번호 변경</Link>
        </button>
    )
}


export default mypage;