"use client"

import React from "react";

import { useRouter } from "next/navigation";

const HeaderProblemBtn = () => {

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
            className="headerBtn">
            문제 풀어보기
        </button>
    )
}

export default HeaderProblemBtn