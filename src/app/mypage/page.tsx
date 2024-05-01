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
                    <div className="h-1/2 flex z-2">
                        <MyPageSidebarForm />
                        <div className="flex justify-end pl-20 pb-24">
                            <div className="border-2 border-gray w-full items-center p-5 bg-color-white rounded-lg">
                                <MyPageInfoForm accessToken={POL_ACCESS_TOKEN} refreshToken={POL_REFRESH_TOKEN} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default mypage;