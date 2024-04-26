'use client'
import React, { useState } from "react";
import Link from "next/link";
import useMyPageProfileStore from "@/store/myPageProfileStore";


const MyPageProfileForm = () => {
    const { userEmail, userName, userId, userLevel } = useMyPageProfileStore();
    return (
        <div>
            <br />
            이메일 = {userEmail}
            <br />
            이름 = {userName}
            <br />
            유저코드 = {userId}
            <br />
            레벨 = {userLevel}
        </div>
    )
}

export default MyPageProfileForm;