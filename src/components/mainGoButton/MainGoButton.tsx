"use client"

import React from "react";

import { useRouter } from "next/navigation";

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
        <button onClick={goProblemSolve}>문제 풀러가기</button>
    )
}


export default MainGoButton