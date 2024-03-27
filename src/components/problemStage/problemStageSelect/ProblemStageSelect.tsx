"use client"
import React,{useState} from "react";

import useProblemStore from "@/store/problemStageStore";

import ProblemStageSelectBtn from "./ProblemStageSelectBtn"
import ProblemStageSelectUl from "./ProblemStageSelectUl";

export interface problemStageSelectType {
    name:"solution" | "practice" | "level",
}

const ProblemStageSelect:React.FC<problemStageSelectType> = ({name}) => {
    const problemList = useProblemStore();
    const [ulToggle,setUlToggle] = useState<boolean>(false);
    const {problemListKoName, problemListUl} = problemList[name];
    return (
        <div className="h-9">
            <ProblemStageSelectBtn value={problemListKoName} isOpenToggle={setUlToggle}/>
            <ProblemStageSelectUl list={problemListUl} name={name} isOpen={ulToggle} isOpenToggle={setUlToggle}/>
        </div>
    )
}

export default ProblemStageSelect
