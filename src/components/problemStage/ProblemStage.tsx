import React from "react";

import ProblemStageSelectContainer from "./problemStageSelect/ProblemStageSelectContainer"
import ProblemStageContainer from "./ProblemStageContainer"


const ProblemStage = () => {
    return (
        <main className="w-screen flex justify-center">
            <ProblemStageSelectContainer/>
            <ProblemStageContainer/>
        </main>
    )
}


export default ProblemStage
