'use client'
import React from "react";

import MyPageProblemForm from "./MyPageProblem";
import MyPageProfileForm from "./MyPageProfile";
import MyPageSubscribeForm from "./MyPageSubscribe";
import MyPageUserSettingForm from "./MyPageUserSetting";
import useMyPageStore from "@/store/myPageStore";

export interface MyPageInfoType {
    accessToken: string | undefined,
    refreshToken: string | undefined
}

const MyPageInfoForm: React.FC<MyPageInfoType> = ({ accessToken, refreshToken }) => {
    const { pageSelector } = useMyPageStore();
    return (
        <div>
            <div className="px-2 pb-2 font-bold">
                나의 정보
            </div>
            <div><MyPageProfileForm /></div>
            <br />
            <div className="px-2 pb-2 font-bold">
                활동 기록
            </div>
            <div><MyPageProblemForm /></div>
            <br />
            {/* <div><MyPageSubscribeForm /></div> */}
            <div className="px-2 pb-2 font-bold">
                계정 설정
            </div>
            < div > <MyPageUserSettingForm accessToken={accessToken} refreshToken={refreshToken} /></div >
        </div >
    )

}


export default MyPageInfoForm;