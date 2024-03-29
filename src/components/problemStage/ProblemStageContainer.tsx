"use client"

import React from "react";

import useGetStages from "@/hooks/useGetStages";
import useProblemStore from "@/store/problemStageStore"

import ProblemStagesLi from "./ProblemStagesLi";

interface ProblemStageContainerType {
    accessToken:string|undefined,
    refreshToken:string|undefined
}


const ProblemStageContainer:React.FC<ProblemStageContainerType> = ({accessToken,refreshToken}) => {
    const {getProblemItem} = useProblemStore();
    const {stageGroupTypes,isCompleted,difficultyLevels} = getProblemItem();
    //const result = useGetStages(accessToken, refreshToken, isCompleted, difficultyLevels, stageGroupTypes);
    //const pageParameters = result?.pageParameters ?? "";
    //const stages = result?.stages ?? [];
    return (
        <>
        <span>총</span>
        <div className="w-5/6 h-problemStage-height px-1 border-solid border rounded-md border-SelectBorder-color">
            <div className="w-full flex justify-evenly"><span>해결</span><span>제목</span><span>설명</span><span>난이도</span></div>
            {stages?.map(ele=>(
                <ProblemStagesLi 
                    key={ele.id} 
                    title={ele.title} 
                    info={ele.description} 
                    level={ele.difficultyLevelType}
                />
            ))}
        </>
    )
}

export default ProblemStageContainer

/*
{stages?.map(ele=>(
                <ProblemStagesLi 
                    key={ele.id} 
                    title={ele.title} 
                    info={ele.description} 
                    level={ele.difficultyLevelType}
                />
            ))}
*/
