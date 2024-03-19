"use client"

import React from "react";

interface ProblemStageSelectedType {
    listName:"solution"|"practice"|"level",
    value:string
}

const ProblemStageSelected:React.FC<ProblemStageSelectedType> = ({listName,value}) => {
    
    return (
        <div className="w-20 h-5 rounded-md bg-thema-color text-white text-xs">
            #{value}
        </div>
    )
}

export default ProblemStageSelected