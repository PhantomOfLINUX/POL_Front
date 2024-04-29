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

<<<<<<< HEAD
const MyPageInfoForm = () => {
    const { pageSelector } = useMyPageStore();
=======
>>>>>>> d5b907939b025104df84e8fa8a75886851253267
    if (pageSelector === 1) {
        return (
            <div><MyPageProfileForm /></div>
        );
    }
    if (pageSelector === 2) {
        return (
            <div><MyPageProblemForm /></div>
        )
    }
    if (pageSelector === 3) {
        return (
            <div><MyPageSubscribeForm /></div>
        )
    }
    if (pageSelector === 4) {
        return (
            <div><MyPageUserSettingForm accessToken={accessToken} refreshToken={refreshToken} /></div>
        )
    }

}


export default MyPageInfoForm;