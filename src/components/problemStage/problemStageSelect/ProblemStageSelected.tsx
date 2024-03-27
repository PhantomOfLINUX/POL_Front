"use client"

import React from "react";

import useProblemStore from "@/store/problemStageStore";

interface ProblemStageSelectedType {
    listName:"solution"|"practice"|"level",
    value:string,
    name:string
}

const ProblemStageSelected:React.FC<ProblemStageSelectedType> = ({listName,value,name}) => {
    const {setProblemItemCheck} = useProblemStore();
    const clickProblemStageSelected = (event:React.MouseEvent<HTMLButtonElement>) =>{
        setProblemItemCheck(listName,name,false)
    }
    return (
        <div className="flex items-center justify-between mr-2 px-2 h-5 rounded-problemStage-selected-radius bg-thema-color text-white text-xs">
            <span className="mr-1">#{value}</span><button onClick={clickProblemStageSelected}>x</button>
        </div>
    )
}

export default ProblemStageSelected