import React from "react";

interface ProblemStagesLiType {
    title:string,
    info:string,
    level:string,
}

const ProblemStagesLi:React.FC<ProblemStagesLiType> = ({title,info,level}) => {
    return (
        <li>
            {title}{info}{level}
        </li>
    )
}


export default ProblemStagesLi