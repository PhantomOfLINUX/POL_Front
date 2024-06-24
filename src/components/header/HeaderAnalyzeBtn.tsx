"use client"
import Link from "next/link"
import { logoutLocally } from "@/utils/logoutUtils/LogoutUtils"
import React from "react"

type logoutType = {
    accessToken: string,
}

const HeaderAnalyzeBtn: React.FC<logoutType> = ({ accessToken }) => {

    return (
        <button type="button" className="headerBtn">
            <Link href="/analysis">내 풀이 분석</Link>
        </button>

    )
}

export default HeaderAnalyzeBtn