'use client'
import React from "react";
import Link from "next/link";

import MyPageProblemForm from "./MyPageProblem";
import MyPageProfileForm from "./MyPageProfile";
import MyPageUserSettingForm from "./MyPageUserSetting";
import { useMemo } from 'react';

interface MyPageInfoFormType {
    myPageSelector: number;
}


const MyPageInfoForm: React.FC<MyPageInfoFormType> = ({ myPageSelector }) => {
    console.log(myPageSelector)
    return (
        <div className="border-2 border-gray w-1/2 items-center p-3 bg-color-white rounded-lg mb-6">
            <div>
                <div><MyPageProfileForm /></div>
                <div><MyPageProblemForm /></div>
                <div><MyPageUserSettingForm /></div>
            </div>

        </div>

    )
}


export default MyPageInfoForm;