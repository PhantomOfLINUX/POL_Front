import React from "react";

import ProblemStageSelectContainer from "./problemStageSelect/ProblemStageSelectContainer"
import ProblemStageContainer from "./ProblemStageContainer"


const ProblemStage = () => {
    return (
        <main className="w-screen flex flex-col items-center justify-center">
            <ProblemStageSelectContainer/>
            <ProblemStageContainer/>
        </main>
    )
}


export default ProblemStage
