"use client"

import React from "react";

import useGetStages from "@/hooks/useGetStages";

import ProblemStagesLi from "./ProblemStagesLi";


interface ProblemStageContainerType {
    accessToken:string|undefined,
    refreshToken:string|undefined
}


const ProblemStageContainer:React.FC<ProblemStageContainerType> = ({accessToken,refreshToken}) => {
    const result = useGetStages(accessToken, refreshToken);
    const pageParameters = result?.pageParameters ?? {currentPageIndex:0,currentPageOfElement:0,pageSize:0,totalElement:0,totalPages:0};
    const stages = result?.stages ?? [];
    return (
        <>
        <span className="w-5/6 text-SelectBorder-color font-black">총<span className="text-thema-color">{(pageParameters as { totalElement: number }).totalElement}개의 스테이지</span>를 풀어볼수 있어요</span>
        <div className="w-5/6 h-problemStage-height px-1 border-solid border rounded-md border-SelectBorder-color">
            <div className="w-full h-10 px-10 flex justify-evenly items-center border-b-problemStageLi-borderWidth border-problemStageLi-color">
                <span className="w-problemStage-isCompleted font-bold">해결</span>
                <span className="w-problemStage-title font-bold">제목</span>
                <span className="w-problemStage-info font-bold">설명</span>
                <span className="w-problemStage-width font-bold">난이도</span>
            </div>
            {stages?.map(ele=>(
                <ProblemStagesLi 
                    key={ele.id} 
                    title={ele.title} 
                    info={ele.description} 
                    level={ele.difficultyLevelType}
                />
            ))}
        </div>
        </>
    )
}

export default ProblemStageContainer