"use client"

import React, {useState} from "react";
import ProblemStageModal from "../ProblemStageModal"

import Image from 'next/image'

interface ProblemStagesLiType {
    title: string,
    stageCode: string,
    info: string,
    level: string,
    questionCount: number
    solved: string
    stageId: string
}

const ProblemStagesLi: React.FC<ProblemStagesLiType> = ({
                                                            title,
                                                            stageCode,
                                                            info,
                                                            level,
                                                            questionCount,
                                                            solved,
                                                            stageId
                                                        }) => {
    const [modalState, setModalState] = useState<boolean>(false)
    return (
        <>
            <li onClick={() => {
                setModalState(true)
            }}
                className="hover:bg-gray-50 list-none w-full px-1 h-14 flex items-center border-b-problemStageLi-borderWidth border-problemStageLi-color cursor-pointer">
                <span className="flex-1 flex justify-center items-center pr-1">
                {solved !== "NOT_COMPLETED" ?
                    <Image
                        src={`./problemStage/${solved}.svg`}
                        alt="down"
                        width={24}
                        height={24}
                        style={{width: '24px', height: '24px'}}
                    /> : ""}
                </span>
                <span className="flex-1 text-left px-1">{stageCode}</span>
                <span className="w-2/12 text-left px-1">{title}</span>
                <span className="w-4/12 text-left px-1">{info}</span>
                <span className="flex-1 text-center px-1">{level}</span>
                <span className="flex-1 text-center px-1">{questionCount}</span>
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
