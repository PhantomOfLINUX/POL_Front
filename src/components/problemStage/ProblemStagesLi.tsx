import React from "react";

interface ProblemStagesLiType {
    solved:boolean,
    title:string,
    info:string,
    level:string,
    problems:string
}

const ProblemStagesLi:React.FC<ProblemStagesLiType> = ({solved,title,info,level,problems}) => {
    return (
        <li>
            
        </li>
    )
}


export default ProblemStagesLi