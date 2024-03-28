import React from "react";

import ProblemStageSelect from "./ProblemStageSelect";
import ProblemStageSelectedBox from "./ProblemStageSelectedBox";

const ProblemStageSelectContainer = () => {
    return (
        <div className="w-5/6">
            <div className="flex">
                <ProblemStageSelect name={"solution"}/>
                <ProblemStageSelect name={"practice"}/>
                <ProblemStageSelect name={"level"}/>
            </div>
            <ProblemStageSelectedBox/>
        </div>
    )
}


export default ProblemStageSelectContainer