import React from "react";

interface ProblemStageSelectLiType {
    value:string,
    check:boolean
}

const ProblemStageSelectLi:React.FC<ProblemStageSelectLiType> = ({value,check}) => {
    
    return (
        <li className="flex">
            <input type="checkbox" defaultChecked={check}/>
            {value}
        </li>
    )
}


export default ProblemStageSelectLi