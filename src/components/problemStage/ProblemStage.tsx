import React from "react";

import ProblemStageSelectContainer from "./problemStageSelect/ProblemStageSelectContainer"
import ProblemStageContainer from "./problemStageContainer/ProblemStageContainer"
import { cookies } from "next/headers";

const ProblemStage = () => {
    const cookiesStore = cookies();
    const POL_ACCESS_TOKEN = cookiesStore.get("POL_ACCESS_TOKEN")?.value
    const POL_REFRESH_TOKEN = cookiesStore.get("POL_REFRESH_TOKEN")?.value
    return (
        <main className="w-full flex flex-col items-center justify-center">
            <ProblemStageSelectContainer/>
            <ProblemStageContainer 
                accessToken={POL_ACCESS_TOKEN}
                refreshToken={POL_REFRESH_TOKEN}
            />
        </main>
    )
}


export default ProblemStage
