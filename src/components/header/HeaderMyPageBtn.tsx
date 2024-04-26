"use client"

import Link from "next/link"
import React from "react"
import { CgProfile } from "react-icons/cg";
import { GetMyPageProfileInfo } from "@/utils/myPageProfileUtils/MyPageProfileUtils";
import {
    GetMyPageProblemStateCompleted,
    GetMyPageProblemStateInProgress,
    GetMyPageProblemHeatmap
}
    from "@/utils/myPageProblemStateUtils/MyPageProblemStateUtils";

import useMyPageProfileStore from "@/store/myPageProfileStore";
import useMyPageCompletedStore from "@/store/myPageCompleteStore";
import useMyPageInProgressStore from "@/store/myPageInProgressStore";
import useMyPageHeatmapInfoStore from "@/store/myPageProblemHeatmap";


type mypageType = {
    accessToken: string
}

const HeaderMyPageBtn: React.FC<mypageType> = ({ accessToken }) => {
    //console.log(accessToken)
    const { setProfileInfo } = useMyPageProfileStore();
    const { setCompletedCode } = useMyPageCompletedStore();
    const { setInProgressCode } = useMyPageInProgressStore();
    const { setHeatmapInfoArray } = useMyPageHeatmapInfoStore();
    return (
        <button type="button" onClick={(e) => {
            GetMyPageProfileInfo(e, accessToken, setProfileInfo),
                GetMyPageProblemStateCompleted(e, accessToken, setCompletedCode),
                GetMyPageProblemStateInProgress(e, accessToken, setInProgressCode),
                GetMyPageProblemHeatmap(e, accessToken, setHeatmapInfoArray)
        }}>
            <Link href="/mypage"><CgProfile className="text-5xl text-thema-color ml-10" /></Link>
        </button>

    )
}

export default HeaderMyPageBtn