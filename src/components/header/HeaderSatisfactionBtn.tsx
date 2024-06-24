"use client"
import Link from "next/link"
import { logoutLocally } from "@/utils/logoutUtils/LogoutUtils"
import React from "react"

type logoutType = {
    accessToken: string,
}

const HeaderSatisfactionBtn: React.FC<logoutType> = ({ accessToken }) => {

    return (
        <button type="button" className="headerBtn">
            <Link href="https://forms.gle/wi67QMHEPJEhCwoh9">만족도 조사</Link>
        </button>

    )
}

export default HeaderSatisfactionBtn