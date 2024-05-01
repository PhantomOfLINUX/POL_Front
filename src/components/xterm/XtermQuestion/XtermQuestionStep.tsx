import React from "react";
import Image from 'next/image'


interface XtermQuestionStepType {
    cur_index:number,
    question_index:number,
    total_questions:number
}

const XtermQuestionStep:React.FC<XtermQuestionStepType> = ({cur_index,question_index,total_questions}) => {
    const svgSrc = cur_index<question_index?"XtermComplted.svg":"XtermCurrent.svg"
    return (
        <li className={`flex w-full relative ${total_questions===cur_index ? '' : cur_index < question_index ? "after:content-['']  after:bg-indigo-600" : "after:content-[''] after:bg-gray-200"} after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-16 after:w-full after:h-0.5 `}>
            <span className={`min-w-6 min-h-6 ${cur_index < question_index ? 'bg-indigo-600 border-transparent text-white' : cur_index === question_index ? 'bg-indigo-100 border-indigo-600 text-indigo-600' : 'bg-gray-50 border-gray-200 text-gray-500'} border-2 rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10 z-10 transition-colors duration-700 ease-in-out`}>
                {cur_index <= question_index &&
                <Image 
                    src={`./XtermSVG/${svgSrc}`} 
                    alt="problemFind"
                    width={20}
                    height={20}
                    style={{ width: '20px', height: '20px' }}
                />}
            </span>
    </li>

    )
}

export default XtermQuestionStep