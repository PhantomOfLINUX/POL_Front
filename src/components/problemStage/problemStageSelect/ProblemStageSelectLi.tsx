"use client"

import React from "react";

import useProblemStore from "@/store/problemStageStore"

interface ProblemStageSelectLiType {
    value:string,
    check:boolean,
    name:"solution" | "practice" | "level",
}

const ProblemStageSelectLi:React.FC<ProblemStageSelectLiType> = ({name,value,check}) => {
    const {setProblemItemCheck} = useProblemStore();
    const ChangeChecked = (event:React.ChangeEvent<HTMLInputElement>) => {
        setProblemItemCheck(name,value,event.target.checked)
    }
    return (
        <li className="flex">
            <input type="checkbox" onChange={ChangeChecked} checked={check}/>
            {value}
        </li>
    )
}


export default ProblemStageSelectLi