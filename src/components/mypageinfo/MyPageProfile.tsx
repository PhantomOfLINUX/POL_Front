'use client'
import React, { useState } from "react";
import Link from "next/link";
import useMyPageProfileStore from "@/store/myPageProfileStore";


const MyPageProfileForm = () => {
    const { userEmail, userName, userId, userLevel } = useMyPageProfileStore();
    return (
        <div className="border border-2 rounded-md">
            <div className="px-3">
                <br />
                <div>
                    <div className="px-5 font-bold">
                        이름
                    </div>
                    <div className="px-3 py-2">
                        <div className="border border-2 rounded-md pl-2 py-1">
                            {userName}
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <div className="px-5 font-bold">
                        이메일
                    </div>
                    <div className="px-3 py-2">
                        <div className="border border-2 rounded-md pl-2 py-1">
                            {userEmail}
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <div className="px-5 font-bold">
                        레벨
                    </div>
                    <div className="px-3 py-2">
                        <div className="border border-2 rounded-md pl-2 py-1">
                            {userLevel}
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <div className="px-5 font-bold">
                        유저코드
                    </div>
                    <div className="px-3 py-2">
                        <div className="border border-2 rounded-md pl-2 py-1">
                            {userId}
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}

export default MyPageProfileForm;