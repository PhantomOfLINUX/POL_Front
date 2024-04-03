import React from "react";

interface ProblemStagePageNationBtnType {
    pageBtn:number|string,
    curPage?:number
}

const ProblemStagePageNationBtn:React.FC<ProblemStagePageNationBtnType> = ({pageBtn,curPage}) => {
    return (
        <button className="w-9 h-9 flex justify-center border items-center border-solid border-SelectBorder-color">
            {pageBtn}
        </button>
    )
}


export default ProblemStagePageNationBtn