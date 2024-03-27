"use client"

import React from "react";

import useGetStages from "@/hooks/useGetStages";
import useProblemStore from "@/store/problemStageStore"

import ProblemStages from "./ProblemStagesLi";

interface ProblemStageContainerType {
    accessToken:string|undefined,
    refreshToken:string|undefined
}


const ProblemStageContainer:React.FC<ProblemStageContainerType> = ({accessToken,refreshToken}) => {
    const {getProblemItem} = useProblemStore();
    const {stageGroupTypes,isCompleted,difficultyLevels} = getProblemItem();
    const data = useGetStages(accessToken,refreshToken,isCompleted,difficultyLevels,stageGroupTypes)
    return (
        <div className="w-5/6 h-problemStage-height px-1 border-solid border rounded-md border-SelectBorder-color">
            
        </div>
    )
}

export default ProblemStageContainer