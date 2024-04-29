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
    const params = new URLSearchParams(searchParams.toString());
    const existingItems = params.get(selectName) ? params.get(selectName)!.split(',') : [];
    
    const ChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            if (!existingItems.includes(itemName)){
                existingItems.push(itemName);
                localStorage.setItem(selectName,existingItems.join(","));
            }
        } else {
            const itemIndex = existingItems.indexOf(itemName);
            existingItems.splice(itemIndex, 1);
            const localStorageItem = localStorage.getItem(selectName)?.split(",");
            localStorage.setItem(selectName,localStorageItem?.filter(ele=>ele!==itemName).join(",")||"")
        }
        if (existingItems.length > 0) {
            params.set(selectName, existingItems.join(','));
        } else {
            params.delete(selectName);
        }
        router.push(pathname+"?"+params.toString());
    };
    
    return (
        <li className="flex  space-x-2 px-1">
            <input name={value} type="checkbox" onChange={ChangeChecked} checked={existingItems.includes(itemName)}/>
            <label htmlFor={value}>{value}</label>
        </li>
    )
}


export default ProblemStageSelectLi