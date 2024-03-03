"use client"

import Link from "next/link"
import {logoutLocally} from "@/utils/logoutUtils/LogoutUtils"
import React from "react"

type logoutType = {
    accessToken:string
}

const HeaderLogoutBtn:React.FC<logoutType> = ({accessToken}) => {

    return (
        <button onClick={()=>{logoutLocally(accessToken)}} type="button" className="headerBtn">
            <Link href="/">로그아웃</Link>
        </button>

    )
}

export default HeaderLogoutBtn