import React from "react";


interface ProblemStageSelect {
    name:string,
    //onClick:()=>void
}

const ProblemStageSelect:React.FC<ProblemStageSelect> = ({name}) => {

    return (
        <button className="w-28 h-9 border-solid border-problemStageSelectBorder-color">
            {name}
        </button>
    )
}

export default ProblemStageSelect

/*
width: 112px;
height: 36px;
*/