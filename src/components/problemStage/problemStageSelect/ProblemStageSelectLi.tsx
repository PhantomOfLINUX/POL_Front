"use client"

import React from "react";

import type { problemStageSelectType } from "@/types/problemStage";


interface ProblemStageSelectLiType {
    value:string,
    selectName:problemStageSelectType,
    itemName:string
}

const ProblemStageSelectLi:React.FC<ProblemStageSelectLiType> = ({selectName,value,itemName}) => {

    const ChangeChecked = (event:React.ChangeEvent<HTMLInputElement>) => {
       
    }
    return (
        <li className="flex">
            <input type="checkbox" onChange={ChangeChecked}/>
            {value}
        </li>
    )
}


export default ProblemStageSelectLi