"use client"

import useProblemStore from "@/store/problemStageStore";

import ProblemStageSelectBtn from "./ProblemStageSelectBtn"
import ProblemStageSelectUl from "./ProblemStageSelectUl";

export interface problemStageSelectType {
    name:"solution" | "practice" | "level",
}

const ProblemStageSelect:React.FC<problemStageSelectType> = ({name}) => {
    const {problemList} = useProblemStore();
    const {problemListKoName, problemListUl} = problemList[name];
    return (
        <div>
            <ProblemStageSelectBtn value={problemListKoName} name={name}/>
            <ProblemStageSelectUl list={problemListUl}/>
        </div>
    )
}

export default ProblemStageSelect
