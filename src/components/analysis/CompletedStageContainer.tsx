"use client"

import React from "react";
import CompletedStageBox from "./CompletedStageBox";
import leftContent from "@/components/analysis/s1015.json"; // JSON 파일 경로
import data from "@/components/analysis/data.json"; // JSON 파일 경로

const CompletedStageContainer: React.FC = () => {
    return (
        <div
            className="h-screen w-5/6 flex flex-col items-center border-2 border-solid border-gray-300 rounded-3xl my-12 py-4"
        >
            <CompletedStageBox
                stage={data.Stage}
                clearDate={data.ClearDate}
                description={data.description}
                leftContent={leftContent.log}
                rightContent={data.content}
            />
        </div>
    )
}

export default CompletedStageContainer;
