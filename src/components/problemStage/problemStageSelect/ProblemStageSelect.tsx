"use client"
import React,{useState} from "react";

import ProblemStageSelectBtn from "./ProblemStageSelectBtn"
import ProblemStageSelectUl from "./ProblemStageSelectUl";

import ProblemStageData from "../ProblemStageData.json"

import type { problemStageSelectType } from "@/types/problemStage";

const asd

const ProblemStageSelect:React.FC<{selectName:problemStageSelectType}> = ({selectName}) => {
    const [ulToggle,setUlToggle] = useState<boolean>(false);
    const {problemListKoName, problemListUl} = ProblemStageData[selectName];
    return (
        <div className="h-9">
            <ProblemStageSelectBtn value={problemListKoName} setUlToggle={setUlToggle}/>
            <ProblemStageSelectUl list={problemListUl} selectName={selectName} ulToggle={ulToggle} setUlToggle={setUlToggle}/>
        </div>
    )
}

export default ProblemStageSelect
