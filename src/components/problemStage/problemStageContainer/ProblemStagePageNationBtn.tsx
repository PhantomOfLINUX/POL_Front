import React, { SetStateAction } from "react";

interface ProblemStagePageNationBtnType {
    pageBtn:number|string,
    curPage?:number,
    pageMove:()=>void,
    checked?:boolean
}

const ProblemStagePageNationBtn:React.FC<ProblemStagePageNationBtnType> = ({pageBtn,curPage,pageMove,checked}) => {
    return (
        <button disabled={checked} onClick={pageMove} className={`${pageBtn===curPage?"bg-thema-color text-disabled-color":""} ${checked?"text-disabled-color":""} w-9 h-9 flex justify-center border items-center border-solid border-SelectBorder-color`}>
            {pageBtn}
        </button>
    )
}


export default ProblemStagePageNationBtn