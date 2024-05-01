import React from "react";


interface XtermQuestionDescriptionType {
    title:string|undefined,
    desciption:string|undefined
}

const XtermQuestionDescription:React.FC<XtermQuestionDescriptionType> = ({title,desciption}) => {
    return (
        <div className="ml-14">
            <p className="text-base font-bold">{title}</p>
            <div className="mt-4">
                <span className="text-base">{desciption}</span>
            </div>
        </div>
    )
}


export default XtermQuestionDescription