import React from "react";
import Image from 'next/image'

interface ProblemStageSelect {
    name:string,
    //onClick:()=>void
}

const ProblemStageSelect:React.FC<ProblemStageSelect> = ({name}) => {

    return (
        <button className="w-28 h-9 flex items-center justify-between px-1 border-solid border rounded-md border-SelectBorder-color">
            {name}
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
