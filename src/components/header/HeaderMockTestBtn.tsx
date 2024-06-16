"use client"

import React from "react";

import { useRouter } from "next/navigation";


const HeaderMockTestBtn = ({ accessToken }: { accessToken: string }) => {

    const router = useRouter();
    const goProblemSolve = () => {
        const queryParams = new URLSearchParams();

        ['isCompleted', 'stageGroupTypes', 'difficultyLevels'].forEach(key => {
            const value = localStorage.getItem(key);
            if (value) queryParams.set(key, value);
        });

        router.push(`/challengelist?stageGroupTypes=MOCK_TESTS`);
    }
    return (
        <button onClick={goProblemSolve}
            className="headerBtn">
            모의고사<br />풀어보기
        </button>
    )
}

export default HeaderMockTestBtn