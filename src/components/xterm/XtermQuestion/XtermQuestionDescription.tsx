import React from "react";

interface XtermQuestionDescriptionType {
    title: string | undefined,
    description: string | undefined
}

const XtermQuestionDescription: React.FC<XtermQuestionDescriptionType> = ({ title, description }) => {
    return (
        <div className="mx-14 h-64 overflow-y-auto"> {/* overflow-y-auto 추가 */}
            <p className="text-base font-bold">{title}</p>
            <div className="mt-4 h-48 overflow-y-auto break-words"> {/* break-words 추가 */}
                <span className="text-base">{description}</span>
            </div>
        </div>
    )
}

export default XtermQuestionDescription;
