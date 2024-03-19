"use client"

import React from "react";
import useProblemStore from "@/store/problemStageStore";

import ProblemStageSelectLi from "./ProblemStageSelectLi";

import type {problemListItem} from "@/store/problemStageStore"

interface ProblemStageSelectUlType {
    list:problemListItem[],
    name:"solution" | "practice" | "level",
}

const ProblemStageSelectUl:React.FC<ProblemStageSelectUlType> = ({list,name}) => {
    const problemList = useProblemStore();
    const problemListBoolean = problemList[name]?.problemListCheck
    return (
        <ul className={`${problemListBoolean?"block" : "hidden"} bg-white relative top-1 w-28 items-center justify-between px-1 border-solid border rounded-md border-SelectBorder-color`}>
            {list.map(li=>{
                return <ProblemStageSelectLi name={name} key={li.problemItemName} value={li.problemItemName} check={li.problemItemCheck}/>
}            )}
        </ul>
    )
}


export default ProblemStageSelectUl
