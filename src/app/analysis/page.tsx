import React from "react";
import CompletedStageContainer from "@/components/analysis/CompletedStageContainer";
import {cookies} from "next/headers";

const AnalysisPage = () => {
    const cookiesStore = cookies();
    const POL_ACCESS_TOKEN = cookiesStore.get("POL_ACCESS_TOKEN")?.value
    const POL_REFRESH_TOKEN = cookiesStore.get("POL_REFRESH_TOKEN")?.value

    return (
        <div className="flex justify-center items-center h-screen">
            <CompletedStageContainer accessToken={POL_ACCESS_TOKEN} refreshToken={POL_REFRESH_TOKEN}/>
        </div>
    )
}

export default AnalysisPage;
