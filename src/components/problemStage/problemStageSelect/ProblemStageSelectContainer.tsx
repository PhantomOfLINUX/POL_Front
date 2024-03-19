import React from "react";

import ProblemStageSelect from "./ProblemStageSelect";
import ProblemStageSelectedBox from "./ProblemStageSelectedBox";

const ProblemStageSelectContainer = () => {
    return (
        <div>
            <div className="flex ">
                <ProblemStageSelect name={"solution"}/>
                <ProblemStageSelect name={"practice"}/>
                <ProblemStageSelect name={"level"}/>
            </div>
            <ProblemStageSelectedBox/>
        </div>
    )
}


export default ProblemStageSelectContainer