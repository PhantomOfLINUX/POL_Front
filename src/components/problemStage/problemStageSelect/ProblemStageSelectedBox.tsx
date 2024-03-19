import React from "react";
import useProblemStore from "@/store/problemStageStore";
import ProblemStageSelected from "./ProblemStageSelected";
import type { problemListItem } from "@/store/problemStageStore";

type problemKey = "solution" | "practice" | "level";

const ProblemStageSelectedBox = () => {
    const problemList = useProblemStore();
    const problemKeys: problemKey[] = ['solution', 'practice', 'level'];

    return (
        <div className="flex flex-wrap w-11/12 h-20 p-1 border-solid border rounded-md border-SelectBorder-color">
            {problemKeys.map((listName) => (
                problemList[listName].problemListUl
                    .filter((item: problemListItem) => item.problemItemCheck)
                    .map((item: problemListItem) => (
                        <ProblemStageSelected key={item.problemItemName} listName={listName} value={item.problemItemName}/>
                    ))
            ))}
        </div>
    );
}

export default ProblemStageSelectedBox;
