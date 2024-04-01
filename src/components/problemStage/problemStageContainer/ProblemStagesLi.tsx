"use client"

import React from "react";

import { useRouter } from "next/navigation";

interface ProblemStagesLiType {
    title:string,
    info:string,
    level:string,
}

const ProblemStagesLi:React.FC<ProblemStagesLiType> = ({title,info,level}) => {
    const router = useRouter();
    return (
        <li onClick={()=>{router.push("/problem")}} className="list-none w-full px-10 h-14 flex items-center justify-evenly border-b-problemStageLi-borderWidth border-problemStageLi-color cursor-pointer">
            <span className="w-problemStage-isCompleted"></span>
            <span className="w-problemStage-title">{title}</span>
            <span className="w-problemStage-info">{info}</span>
            <span className="w-problemStage-width">{level}</span>
        </li>
    )
}


export default ProblemStagesLi
