"use client"

import React from "react";

import { useSearchParams,useRouter,usePathname } from 'next/navigation'

import type { problemStageSelectType } from "@/types/problemStage"

interface ProblemStageSelectedType {
    selectName:problemStageSelectType,
    value:string,
    itemName:string
}

const ProblemStageSelected:React.FC<ProblemStageSelectedType> = ({selectName,value,itemName}) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();
    const params = new URLSearchParams(searchParams.toString());
    const existingItems = params.get(selectName) ? params.get(selectName)!.split(',') : [];
    
    const clickProblemStageSelected = (event:React.MouseEvent<HTMLButtonElement>) =>{
        const itemIndex = existingItems.indexOf(itemName);
        existingItems.splice(itemIndex, 1);
        const localStorageItem = localStorage.getItem(selectName)?.split(",");
        localStorage.setItem(selectName,localStorageItem?.filter(ele=>ele!==itemName).join(",")||"")
        if (existingItems.length > 0) {
            params.set(selectName, existingItems.join(','));
        } else {
            params.delete(selectName);
        }
        router.push(pathName+"?"+params.toString());
    }

    return (
        <div className="flex items-center justify-between mr-2 px-2 h-6 rounded-problemStage-selected-radius bg-blue-500 text-gray-0 text-xs">
            <span className="mr-2 py-1"># {value}</span><button onClick={clickProblemStageSelected}>x</button>
        </div>
    )
}

export default ProblemStageSelected