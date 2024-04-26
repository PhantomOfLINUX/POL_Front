import React from "react";
import Link from "next/link"
import { cookies } from "next/headers";

import MyPageSidebarForm from "@/components/mypagesidebar/MyPageSidebarForm";
import MyPageInfoForm from "@/components/mypageinfo/MyPageInfo";
import HeatmapForm from "@/components/mypageinfo/Heatmap";

const mypage = () => {
    const cookiesStore = cookies();
    const POL_ACCESS_TOKEN = cookiesStore.get("POL_ACCESS_TOKEN")?.value
    const POL_REFRESH_TOKEN = cookiesStore.get("POL_REFRESH_TOKEN")?.value

    return (
        <div className="page-container">
            <div className="content-wrap">
                <div className="pl-36 pt-16">
                    <nav className="px-0 flex z-10">
                        <MyPageSidebarForm />
                        <div className="border-2 border-gray w-1/2 items-center p-3 bg-color-white rounded-lg mb-6">
                            <MyPageInfoForm accessToken={POL_ACCESS_TOKEN} refreshToken={POL_REFRESH_TOKEN} />
                        </div>
                    </nav>
                </div>
            </div>
            <div>
                <HeatmapForm />
            </div>
        </div>
    )
}


export default mypage;