'use client'
import React, { useState } from "react";
import Link from "next/link";
import useMyPageProfileStore from "@/store/myPageProfileStore";


const MyPageProfileForm = () => {
    const { userEmail, userName, userId, userLevel } = useMyPageProfileStore();
    return (
<<<<<<< HEAD
        <div className="border border-2 rounded-md">
=======
        <div className="border-2 rounded-md">
>>>>>>> 219a885f9a4d2af241d5fe1cec44ddddd8f267dd
            <div className="px-3">
                <br />
                <div>
                    <div className="px-5 font-bold">
                        이름
                    </div>
                    <div className="px-3 py-2">
<<<<<<< HEAD
                        <div className="border border-2 rounded-md pl-2 py-1">
=======
                        <div className="border-2 rounded-md pl-2 py-1">
>>>>>>> 219a885f9a4d2af241d5fe1cec44ddddd8f267dd
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
<<<<<<< HEAD
                        <div className="border border-2 rounded-md pl-2 py-1">
=======
                        <div className="border-2 rounded-md pl-2 py-1">
>>>>>>> 219a885f9a4d2af241d5fe1cec44ddddd8f267dd
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
<<<<<<< HEAD
                        <div className="border border-2 rounded-md pl-2 py-1">
=======
                        <div className="border-2 rounded-md pl-2 py-1">
>>>>>>> 219a885f9a4d2af241d5fe1cec44ddddd8f267dd
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
<<<<<<< HEAD
                        <div className="border border-2 rounded-md pl-2 py-1">
=======
                        <div className="border-2 rounded-md pl-2 py-1">
>>>>>>> 219a885f9a4d2af241d5fe1cec44ddddd8f267dd
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