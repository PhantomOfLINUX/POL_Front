"use client"

import React from "react";

import useProblemStore from "@/store/problemStageStore"

interface ProblemStageSelectLiType {
    value:string,
    check:boolean,
    name:"solution" | "practice" | "level",
    itemName:string
}

const ProblemStageSelectLi:React.FC<ProblemStageSelectLiType> = ({name,value,check,itemName}) => {
    const {setProblemItemCheck} = useProblemStore();
    const ChangeChecked = (event:React.ChangeEvent<HTMLInputElement>) => {
        setProblemItemCheck(name,itemName,event.target.checked)
    }
    return (
        <li className="flex">
            <input type="checkbox" onChange={ChangeChecked} checked={check}/>
            {value}
        </li>
    )
}


export default ProblemStageSelectLi