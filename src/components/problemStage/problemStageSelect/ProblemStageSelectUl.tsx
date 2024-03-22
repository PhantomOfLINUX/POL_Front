"use client"

import React,{useRef} from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import useProblemStore from "@/store/problemStageStore";

import ProblemStageSelectLi from "./ProblemStageSelectLi";

import type {problemListItem} from "@/store/problemStageStore"

interface ProblemStageSelectUlType {
    list:problemListItem[],
    name:"solution" | "practice" | "level",
}

const ProblemStageSelectUl:React.FC<ProblemStageSelectUlType> = ({list,name}) => {
    const ulRef = useRef<HTMLUListElement>(null);
    const problemList = useProblemStore();
    const {setProblemListCheck} = useProblemStore();
    useOutsideClick(ulRef,setProblemListCheck,name,problemList[name].problemListCheck)
    const problemListBoolean = problemList[name]?.problemListCheck;
    return (
        <ul ref={ulRef} className={`${problemListBoolean?"block" : "hidden"} bg-white relative top-2 w-28 items-center justify-between px-1 border-solid border rounded-md border-SelectBorder-color`}>
            {list.map(li=>{
                return <ProblemStageSelectLi name={name} key={li.problemItemName} value={li.problemItemName} check={li.problemItemCheck}/>
}            )}
        </ul>
    )
}


export default ProblemStageSelectUl
