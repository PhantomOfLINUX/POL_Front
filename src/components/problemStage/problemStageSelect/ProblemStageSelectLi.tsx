"use client"

import React from "react";
import { useSearchParams,useRouter,usePathname } from 'next/navigation'

import type { problemStageSelectType } from "@/types/problemStage";


interface ProblemStageSelectLiType {
    value:string,
    selectName:problemStageSelectType,
    itemName:string
}

const ProblemStageSelectLi:React.FC<ProblemStageSelectLiType> = ({selectName,value,itemName}) => {
    const searchParams = useSearchParams()
    const router = useRouter();
    const pathname = usePathname();
    const ChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        const params = new URLSearchParams(searchParams.toString());
        const existingItems = params.get(selectName) ? params.get(selectName)!.split(',') : [];

        if (event.target.checked) {
            if (!existingItems.includes(itemName))
                existingItems.push(itemName);
        } else {
            const itemIndex = existingItems.indexOf(itemName);
            existingItems.splice(itemIndex, 1);
        }

        if (existingItems.length > 0) {
            params.set(selectName, existingItems.join(','));
        } else {
            params.delete(selectName);
        }
        router.push(pathname+"?"+params.toString());
    };
    
    return (
        <li className="flex">
            <input type="checkbox" onChange={ChangeChecked}/>
            {value}
        </li>
    )
}


export default ProblemStageSelectLi