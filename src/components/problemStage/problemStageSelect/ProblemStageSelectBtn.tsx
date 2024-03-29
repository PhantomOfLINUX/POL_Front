"use client"

import React from "react";
import Image from 'next/image'

interface problemStageSelectBtnType {
    value:string,
    setUlToggle:React.Dispatch<React.SetStateAction<boolean>>
}

const ProblemStageSelect:React.FC<problemStageSelectBtnType> = ({value,setUlToggle}) => {
    return (
        <button onClick={()=>{setUlToggle(preOpen=>!preOpen)}} className="w-28 h-9 mr-2 flex items-center justify-between px-1 border-solid border rounded-md border-SelectBorder-color">
            {value}
            <Image 
                src={"./problemStage/problemSelect.svg"} 
                alt="down"
                width={50}
                height={50}
                style={{ width: 'auto', height: 'auto' }}
            />
        </button>
    )
}

export default ProblemStageSelect
