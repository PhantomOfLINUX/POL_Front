'use client'
import React from "react";
import Link from "next/link";

import MyPageProblemForm from "./MyPageProblem";
import MyPageProfileForm from "./MyPageProfile";
import MyPageSubscribeForm from "./MyPageSubscribe";
import MyPageUserSettingForm from "./MyPageUserSetting";
import useMyPageStore from "@/store/myPageStore";


const MyPageInfoForm = () => {
    const { pageSelector } = useMyPageStore();
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
            <div><MyPageUserSettingForm /></div>
        )
    }
}


export default MyPageInfoForm;