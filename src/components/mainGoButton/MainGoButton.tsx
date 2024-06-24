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
                className="text-gray-50 w-1/6 h-1/12 bg-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg text-center p-4 my-12">
            문제 풀어보러 가기
        </button>
    )
}


export default MainGoButton