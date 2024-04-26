"use client"

import React,{useState} from "react";
import ProblemStageModal from "../ProblemStageModal"

import Image from 'next/image'

interface ProblemStagesLiType {
    title:string,
    stageCode:string,
    info:string,
    level:string,
    questionCount:number
    solved:string
    stageId:string
}

const ProblemStagesLi:React.FC<ProblemStagesLiType> = ({title,stageCode,info,level,questionCount,solved,stageId}) => {
    const [modalState,setModalState] = useState<boolean>(false)
    return (
        <>
        <li onClick={()=>{
            setModalState(true)
        }} className=" hover:bg-slate-100 list-none w-full px-10 h-14 flex items-center justify-evenly border-b-problemStageLi-borderWidth border-problemStageLi-color cursor-pointer">
            <span className="w-problemStage-isCompleted"> 
            {solved!=="NOT_COMPLETED"?
            <Image 
                src={`./problemStage/${solved}.svg`} 
                alt="down"
                width={20}
                height={20}
                style={{ width: '20px', height: '20px' }}
            />:""}
            </span>
            <span className="w-problemStage-title">{stageCode}</span>
            <span className="w-problemStage-title font-bold">{title}</span>
            <span className="w-problemStage-info">{info}</span>
            <span className="w-problemStage-width">{level}</span>
            <span className="w-problemStage-width">{questionCount}</span>
        </li>
        <ProblemStageModal
            modalState={modalState}
            stageId={stageId}
            title={title}
            info={info}
            level={level}
            questionCount={questionCount}
            setModalState={setModalState}
        />
        </>
    )
}


export default ProblemStagesLi
