"use client"

import React from "react";
import CompletedStageBox from "./CompletedStageBox";
import leftContent from "@/components/analysis/s1015.json"; // JSON 파일 경로
import data from "@/components/analysis/data.json"; // JSON 파일 경로

export interface TokenProps {
    accessToken: string | undefined,
    refreshToken: string | undefined
}

const rt = "eyJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJQT0wtQkRCRWVqLUdqNUFudFpwcloiLCJpYXQiOjE3MTkyNDU5NzIsImlzcyI6ImFwaS5wb2wub3Iua3IiLCJleHAiOjE3MTk4NTA3NzJ9.Zd_glxe7H0SKqBMSve-RJViSK4aog0t-jVj1UGkoZ8zsSTiEcIDx2HMQAmKg-fgb5Bjp9_-cYIaoHAVS2UK-KA"

const CompletedStageContainer: React.FC<TokenProps> = ({ accessToken, refreshToken }) => {
    return (
        <div
            className="h-screen w-5/6 flex flex-col items-center border-2 border-solid border-gray-300 rounded-3xl my-12 py-4"
        >

            {(refreshToken===rt)&&<CompletedStageBox
                stage={data.Stage}
                clearDate={data.ClearDate}
                description={data.description}
                leftContent={leftContent.log}
                rightContent={data.content}
            />}
        </div>
    )
}

export default CompletedStageContainer;
