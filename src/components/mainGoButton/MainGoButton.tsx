"use client"

import React from "react";

import {useRouter} from "next/navigation";

const MainGoButton = () => {
    const router = useRouter();
    const goProblemSolve = () => {
        const queryParams = new URLSearchParams();

        ['isCompleted', 'stageGroupTypes', 'difficultyLevels'].forEach(key => {
            const value = localStorage.getItem(key);
            if (value) queryParams.set(key, value);
        });

        router.push(`/challengelist${queryParams.toString() ? `?${queryParams}` : ''}`);
    }
    return (
        <button onClick={goProblemSolve}
                className="text-gray-50 w-1/3 h-1/6 bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center p-4 m-4">
            문제 풀어보기
        </button>
    )
}


export default MainGoButton