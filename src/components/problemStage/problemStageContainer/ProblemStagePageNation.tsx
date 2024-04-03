"use client"

import React,{useState} from "react";

import ProblemStagePageNationBtn from "./ProblemStagePageNationBtn";

interface ProblemStagePageNationType {
    totalStages:number
}


const ProblemStagePageNation:React.FC<ProblemStagePageNationType> = ({totalStages}) => {
    const totalPages = Array.from({ length: Math.ceil(totalStages / 5) }, (v, pageIndex) =>
      Array.from(
        { length: (pageIndex + 1) * 5 <= totalStages ? 5 : totalStages % 5},
        (v, elemIndex) => elemIndex + 1 + pageIndex * 5
      )
    );
    const [curPageNation,setCurPageNation] = useState(0);//페이지네이션의 현재 위치
    const [curPage,setCurPage] = useState(1)//현재 페이지
    return (
        <div className="flex">
            <ProblemStagePageNationBtn pageBtn={"<"}/>
                {totalPages[curPageNation].map(ele=><ProblemStagePageNationBtn curPage={curPage} key={ele} pageBtn={ele}/>)}
            <ProblemStagePageNationBtn pageBtn={">"}/>
        </div>
    )
}

export default ProblemStagePageNation