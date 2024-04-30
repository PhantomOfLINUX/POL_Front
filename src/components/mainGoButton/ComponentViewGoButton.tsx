"use client"

import React from "react";

import {useRouter} from "next/navigation";

const MainGoButton = () => {
    const router = useRouter();
    const go = () => {
        router.push(`/view/component`);
    }
    return (
        <button onClick={go}
                className="text-gray-50 w-1/3 h-1/6 bg-gradient-to-r from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center p-4 m-4">
            컴포넌트 확인하기
        </button>
    )
}


export default MainGoButton