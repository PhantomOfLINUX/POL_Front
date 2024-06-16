"use client"

import React from "react";

import useGetStages from "@/hooks/useGetStages";

import ProblemStagesLi from "./ProblemStagesLi";
import ProblemStagePageNationContainer from "./ProblemStagePageNationContainer";

interface ProblemStageContainerType {
    accessToken: string | undefined,
    refreshToken: string | undefined
}

interface Stage {
    id: string;
    stageCode: string,
    title: string;
    description: string;
    difficultyLevelType: string;
    questionCount: number;
    completedStatus: string;
}

interface PageParameters {
    currentPageIndex: number;
    currentPageOfElement: number;
    pageSize: number;
    totalElement: number;
    totalPages: number;
}

interface UseGetStagesResult {
    stages: Stage[];
    pageParameters: PageParameters;
}



const ProblemStageContainer: React.FC<ProblemStageContainerType> = ({accessToken, refreshToken}) => {
    const result = useGetStages(accessToken, refreshToken) as UseGetStagesResult | undefined;
    const pageParameters = result?.pageParameters ?? {
        currentPageIndex: 0,
        currentPageOfElement: 0,
        pageSize: 0,
        totalElement: 0,
        totalPages: 0
    };
    const stages = result?.stages ?? [];
    return (
        <>
            <span className="w-8/12 text-gray-700">총 <span
                className="text-blue-500 font-bold">{(pageParameters as {
                    totalElement: number
                }).totalElement}개의 스테이지</span>를 풀어볼 수 있어요</span>
            <ul className="w-8/12 flex flex-col bg-gray-0 justify-between h-problemStage-height px-2 border-solid border rounded-md border-SelectBorder-color my-4 mb-36">
                <div>
                    <div
                        className="w-full h-10 px-1 flex items-center border-b-problemStageLi-borderWidth border-gray-300">
                        <span className="flex-1 font-medium text-center pr-1">해결</span>
                        <span className="flex-1 font-medium text-left px-1">문제 번호</span>
                        <span className="w-2/12 font-medium text-left px-1">제목</span>
                        <span className="flex-1 font-medium text-center px-1">난이도</span>
                        <span className="flex-1 font-medium text-center pr-1">문항수</span>
                    </div>

                    {stages?.map(ele => (
                        <ProblemStagesLi
                            key={ele.id}
                            stageCode={ele.stageCode}
                            stageId={ele.id}
                            solved={ele?.completedStatus}
                            title={ele.title}
                            info={ele.description}
                            level={ele.difficultyLevelType}
                            questionCount={ele.questionCount}
                        />
                    ))}
                </div>
                <ProblemStagePageNationContainer
                    totalElement={(pageParameters as { totalElement: number }).totalElement}
                    totalStages={pageParameters.totalPages}
                />
            </ul>
        </>
    )
}

export default ProblemStageContainer