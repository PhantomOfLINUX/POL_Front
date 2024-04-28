"use client"

import React, {useState} from "react";
import {useSearchParams, useRouter, usePathname} from 'next/navigation'


import ProblemStagePageNationBtn from "./ProblemStagePageNationBtn";

interface ProblemStagePageNationType {
    totalStages: number
}


const ProblemStagePageNation: React.FC<ProblemStagePageNationType> = ({totalStages}) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams);
    const totalPages = Array.from({length: Math.ceil(totalStages / 5)}, (v, pageIndex) =>
        Array.from(
            {length: (pageIndex + 1) * 5 <= totalStages ? 5 : totalStages % 5},
            (v, elemIndex) => elemIndex + 1 + pageIndex * 5
        )
    );
    const [curPageNation, setCurPageNation] = useState(0);//페이지네이션의 현재 위치

    const ChangeChecked = (ele: number) => {
        params.set("page", ele.toString())
        router.push(pathname + "?" + params.toString());
    };


    return (
        <div className="flex">
            <ProblemStagePageNationBtn pageMove={() => {
                ChangeChecked(totalPages[curPageNation - 1][0]);
                setCurPageNation(pre => pre - 1)
            }} checked={curPageNation === 0} pageBtn={"<"} />

            {totalPages[curPageNation]?.map((ele, index) => (
                <ProblemStagePageNationBtn
                    pageMove={() => {
                        ChangeChecked(ele);
                    }}
                    curPage={searchParams.get("page") ? Number(searchParams.get("page")) : 1}
                    key={ele}
                    pageBtn={ele}
                />
            ))}

            <ProblemStagePageNationBtn
                pageMove={() => {
                    ChangeChecked(totalPages[curPageNation + 1][0]);
                    setCurPageNation((pre) => pre + 1);
                }}
                checked={curPageNation === totalPages.length - 1}
                pageBtn={">"}
            />
        </div>
    )
}

export default ProblemStagePageNation
