"use client"

import React from "react";

import { useRouter } from "next/navigation";

const MainGoButton = () => {
    const router = useRouter();
    const goProblemSolve = () => {
        const isCompleted = localStorage.getItem("isCompleted")
        const stageGroupTypes = localStorage.getItem("stageGroupTypes")
        const difficultyLevels = localStorage.getItem("difficultyLevels")
        const queryParams = new URLSearchParams();
        if (isCompleted) queryParams.set('isCompleted', isCompleted);
        if (stageGroupTypes) queryParams.set('stageGroupTypes', stageGroupTypes);
        if (difficultyLevels) queryParams.set('difficultyLevels', difficultyLevels);
        const queryString = queryParams.toString();
        router.push(`/challengelist${queryString ? `?${queryString}` : ''}`);
    }
    return (
        <button onClick={goProblemSolve}>문제 풀러가기</button>
    )
}


export default MainGoButton