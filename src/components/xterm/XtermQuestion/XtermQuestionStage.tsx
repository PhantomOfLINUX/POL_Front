import React from "react";

import XtermQuestionStep from "./XtermQuestionStep";

interface XtermQuestionStageType {
    total_questions:number,
    question_index:number
}

const XtermQuestionStage:React.FC<XtermQuestionStageType> = ({total_questions,question_index}) => {
    const total_questions_arr = Array.from({length:total_questions},(_,index)=>index+1)
    return (
        <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base my-16">
            {total_questions_arr.map((cur_index)=>(
                <XtermQuestionStep key={cur_index} total_questions={total_questions} cur_index={cur_index} question_index={question_index}/>
            ))}
        </ol>
    )
}

export default XtermQuestionStage