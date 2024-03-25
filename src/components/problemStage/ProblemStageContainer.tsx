"use client"

import React from "react";

import ProblemStages from "./ProblemStagesLi";

interface ProblemStageContainerType {
    accessToken:string|undefined,
    refreshToken:string|undefined
}


const ProblemStageContainer:React.FC<ProblemStageContainerType> = ({accessToken,refreshToken}) => {
    
    return (
        <div className="w-5/6 h-screen px-1 border-solid border rounded-md border-SelectBorder-color">
            
        </div>
    )
}

export default ProblemStageContainer