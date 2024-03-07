"use client"

import Link from "next/link"
import React from "react"
import { CgProfile } from "react-icons/cg";
import { MdAddCircle } from "react-icons/md";

type mypageType = {
    accessToken: string
}

const HeaderMyPageBtn: React.FC<mypageType> = ({ accessToken }) => {

    return (
        <button type="button">
            <Link href="/mypage"><CgProfile className="text-5xl text-thema-color ml-10" /></Link>
        </button>

    )
}

export default HeaderMyPageBtn