import React from "react";
import Link from "next/link"
import MyPageSidebarForm from "@/components/mypagesidebar/MyPageSidebarForm";
import MyPageInfoForm from "@/components/mypageinfo/MyPageInfo";

const mypage = () => {

    return (
        <div className="page-container">
            <div className="content-wrap">
                <div className="pl-36 pt-16">
                    <nav className="px-0 flex">
                        <MyPageSidebarForm />
                        <div className="border-2 border-gray w-1/2 items-center p-3 bg-color-white rounded-lg mb-6">
                            <MyPageInfoForm />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}


export default mypage;