'use client'
import React from "react";
import Link from "next/link";

const MyPageUserSettingForm = () => {

    return (
        <div>
            회원탈퇴/비밀번호 안전/비밀번호 변경 등등이 들어갈 컴포넌트
            <div className="flex-col flex-auto float-right">
                <button type="button" className="flex justify-center items-center w-36 h-12 bg-thema-color text-white rounded">
                    <Link href="/changepassword">비밀번호 변경</Link>
                </button>
            </div>
        </div>

    )
}

export default MyPageUserSettingForm;