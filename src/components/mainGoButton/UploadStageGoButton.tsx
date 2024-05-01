"use client"

import React from "react";

import {useRouter} from "next/navigation";

const UploadStageGoButton = () => {
    const router = useRouter();
    const go = () => {
        router.push(`/admin/upload/stage`);
    }
    return (
        <button onClick={go}
                className="text-gray-50 w-1/3 h-1/6  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-sm text-center p-4 m-4">
            스테이지 등록하기
        </button>
    )
}


export default UploadStageGoButton