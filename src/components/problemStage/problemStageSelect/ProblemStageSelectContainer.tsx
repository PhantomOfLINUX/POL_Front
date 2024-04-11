import React from "react";

import ProblemStageSelect from "./ProblemStageSelect";
import ProblemStageSelectedBox from "./ProblemStageSelectedBox";

const ProblemStageSelectContainer = () => {
    return (
        <div className="w-8/12 ">
            <div className="flex">
                <ProblemStageSelect selectName={"isCompleted"}/>
                <ProblemStageSelect selectName={"stageGroupTypes"}/>
                <ProblemStageSelect selectName={"difficultyLevels"}/>
            </div>
            <ProblemStageSelectedBox/>
        </div>
    )
}

export default ProblemStageSelectContainer