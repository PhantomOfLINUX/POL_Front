"use client"

import Link from "next/link"
import React from "react"
import { CgProfile } from "react-icons/cg";
import { GetMyPageProfileInfo } from "@/utils/myPageProfileUtils/MyPageProfileUtils";
import useMyPageProfileStore from "@/store/myPageProfileStore";


type mypageType = {
    accessToken: string
}

const HeaderMyPageBtn: React.FC<mypageType> = ({ accessToken }) => {
    const { setProfileInfo } = useMyPageProfileStore();
    return (
        <button type="button" onClick={(e) => { GetMyPageProfileInfo(e, accessToken, setProfileInfo) }}>
            <Link href="/mypage"><CgProfile className="text-5xl text-thema-color ml-10" /></Link>
        </button>

    )
}

export default HeaderMyPageBtn