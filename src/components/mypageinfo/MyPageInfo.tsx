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
            <div><MyPageProfileForm /></div>
            <br />
            <div><MyPageProblemForm /></div>
            <br />
            {/* <div><MyPageSubscribeForm /></div> */}

            <div><MyPageUserSettingForm accessToken={accessToken} refreshToken={refreshToken} /></div>
        </div>
    )

}


export default MyPageInfoForm;