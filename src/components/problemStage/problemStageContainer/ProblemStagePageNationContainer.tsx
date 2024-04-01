import React from "react";

import ProblemStagePageNation from "./ProblemStagePageNation";

interface ProblemStagePageNationContainerType {
    totalElement:number
    totalPages:number
}

const ProblemStagePageNationContainer:React.FC<ProblemStagePageNationContainerType> = ({totalElement,totalPages}) => {
    return (
        <div className="flex items-center justify-between h-14 border-t-problemStageLi-borderWidth border-problemStageLi-color">
            <span>총 {totalElement}개의 스테이지를 찾았어요</span>
            <ProblemStagePageNation totalPages={totalPages}/>
        </div>
    )
}

export default ProblemStagePageNationContainer