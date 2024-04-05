import React from "react";

import ProblemStagePageNation from "./ProblemStagePageNation";

interface ProblemStagePageNationContainerType {
    totalElement:number
    totalStages:number
}

const ProblemStagePageNationContainer:React.FC<ProblemStagePageNationContainerType> = ({totalElement,totalStages}) => {
    return (
        <div className="flex items-center justify-between px-6 h-14 border-t-problemStageLi-borderWidth border-problemStageLi-color">
            <span>총 {totalElement}개의 스테이지를 찾았어요</span>
            <ProblemStagePageNation totalStages={totalStages}/>
        </div>
    )
}

export default ProblemStagePageNationContainer