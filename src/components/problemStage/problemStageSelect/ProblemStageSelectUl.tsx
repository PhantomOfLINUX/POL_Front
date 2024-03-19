import React from "react";

import type {problemListItem} from "@/store/problemStageStore"

import ProblemStageSelectLi from "./ProblemStageSelectLi";


interface ProblemStageSelectUlType {
    list:problemListItem[]
}

const ProblemStageSelectUl:React.FC<ProblemStageSelectUlType> = ({list}) => {
    return (
        <ul className="w-28 items-center justify-between px-1 border-solid border rounded-md border-SelectBorder-color">
            {list.map(li=>{
                return <ProblemStageSelectLi key={li.problemItemName} value={li.problemItemName} check={li.problemItemCheck}/>
}            )}
        </ul>
    )
}


export default ProblemStageSelectUl


//동적으로 리스트를 보여줘야 함