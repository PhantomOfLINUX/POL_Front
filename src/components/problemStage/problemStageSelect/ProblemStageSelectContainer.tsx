import React from "react";

import ProblemStageSelect from "./ProblemStageSelect";


const ProblemStageSelectContainer = () => {
    return (
        <div>
            <ProblemStageSelect name={"풀이상태"}/>
            <ProblemStageSelect name={"실습구분"}/>
            <ProblemStageSelect name={"종합 난이도"}/>
            <ProblemStageSelect name={"종합 난이도"}/>
        </div>
    )
}


export default ProblemStageSelectContainer