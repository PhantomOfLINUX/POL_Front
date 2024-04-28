"use client"

import React,{useRef} from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import ProblemStageSelectLi from "./ProblemStageSelectLi";

import type { problemListItem, problemStageSelectType } from "@/types/problemStage";

interface ProblemStageSelectUlType {
    list:problemListItem[],
    selectName:problemStageSelectType,
    ulToggle:boolean,
    setUlToggle:React.Dispatch<React.SetStateAction<boolean>>
}

const ProblemStageSelectUl:React.FC<ProblemStageSelectUlType> = ({list,selectName,ulToggle,setUlToggle}) => {
    const ulRef = useRef<HTMLUListElement>(null);
    useOutsideClick(ulRef,setUlToggle,ulToggle)
    return (
        <ul ref={ulRef} className={`${ulToggle?"block" : "hidden"} bg-gray-0 relative top-2 min-w-24 items-center justify-between px-1.5 py-2 border-solid border rounded-md border-gray-600`}>
            {list.map(li=>{
                return <ProblemStageSelectLi selectName={selectName} key={li.problemItemName} value={li.problemItemKoName} itemName={li.problemItemName}/>
}            )}
        </ul>
    )
}


export default ProblemStageSelectUl
