"use client"

import React,{useRef} from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import ProblemStageSelectLi from "./ProblemStageSelectLi";

import type {problemListItem} from "@/store/problemStageStore"

interface ProblemStageSelectUlType {
    list:problemListItem[],
    name:"solution" | "practice" | "level",
    isOpen:boolean,
    isOpenToggle:React.Dispatch<React.SetStateAction<boolean>>
}

const ProblemStageSelectUl:React.FC<ProblemStageSelectUlType> = ({list,name,isOpen,isOpenToggle}) => {
    const ulRef = useRef<HTMLUListElement>(null);
    useOutsideClick(ulRef,isOpenToggle,isOpen)
    return (
        <ul ref={ulRef} className={`${isOpen?"block" : "hidden"} bg-white relative top-2 w-28 items-center justify-between px-1 border-solid border rounded-md border-SelectBorder-color`}>
            {list.map(li=>{
                return <ProblemStageSelectLi name={name} key={li.problemItemName} value={li.problemItemKoName} itemName={li.problemItemName} check={li.problemItemCheck}/>
}            )}
        </ul>
    )
}


export default ProblemStageSelectUl
