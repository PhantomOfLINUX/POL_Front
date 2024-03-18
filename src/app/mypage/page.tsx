import React from "react";
import Link from "next/link"
import MyPageSidebarForm from "@/components/mypagesidebar/MyPageSidebarForm";

const mypage = () => {

    return (
        <div className="page-container">
            <div className="content-wrap">
                <div className="pl-24">
                    <MyPageSidebarForm />
                </div>
                <button type="button">
                    <Link href="/changepassword">비밀번호 변경</Link>
                </button>
            </div>
        </div>
    )
}


export default mypage;