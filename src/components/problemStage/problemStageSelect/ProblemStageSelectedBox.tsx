"use client"

import React from "react";
import { useSearchParams } from 'next/navigation'

import ProblemStageSelected from "./ProblemStageSelected"

import ProblemStageData from "../ProblemStageData.json"

import type { problemStageSelectType } from "@/types/problemStage"

const ProblemStageSelectedBox = () => {
    const searchParam = useSearchParams();
    const problemStageDataKey:problemStageSelectType[] = ["isCompleted","stageGroupTypes","difficultyLevels"];
    const isCompleted = searchParam.get("isCompleted")?.split(",");
    const stageGroupTypes = searchParam.get("stageGroupTypes")?.split(",");
    const difficultyLevels = searchParam.get("difficultyLevels")?.split(",");
    return (
        <div className="flex flex-wrap my-2 w-full h-20 p-1 border-solid border rounded-md border-SelectBorder-color">
            {
                problemStageDataKey.map((dataKey)=>(
                    ProblemStageData[dataKey]["problemListUl"]
                    .filter(listul=>searchParam.get(dataKey)?.split(",").includes(listul.problemItemName))
                    .map(item=>(
                        <ProblemStageSelected key={item.problemItemName} selectType={dataKey} value={item.problemItemKoName} name={item.problemItemName}/>
                    ))  
                ))
            }
        </div>
    );
}

export default ProblemStageSelectedBox;
// <ProblemStageSelected key={item.problemItemName} listName={listName} value={item.problemItemKoName} name={item.problemItemName}/>
/*
                problemStageDataKey.map((dataKey:problemStageSelectType)=>{
                    ProblemStageData[dataKey]["problemListUl"].map(ele=>(
                        <div></div>
                    ))
                })

*/