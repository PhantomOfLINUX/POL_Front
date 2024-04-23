import React, { SetStateAction } from "react";

import { useRouter } from "next/navigation";

interface ProblemStageModalType {
    modalState:boolean,
    stageId:string
    title:string,
    info:string,
    level:string,
    questionCount:number,
    setModalState:React.Dispatch<SetStateAction<boolean>>
}


const ProblemStageModal:React.FC<ProblemStageModalType> = ({modalState,stageId,title,info,level,questionCount,setModalState}) => {
    const router = useRouter();
    const closeModal = (e:React.MouseEvent<HTMLButtonElement>|React.MouseEvent<HTMLDivElement>) => {e.preventDefault(); setModalState(false)}
    return (
        <div onClick={(e)=>{closeModal(e)}} className={`${modalState?"block":"hidden"} flex items-center justify-center fixed z-50 w-full h-full p-4 bg-OpaqueBackground-color md:inset-0`}>
            <div className="absolute max-w-md max-h-full bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            {title}
                        </h3>
                        <button onClick={(e)=>{closeModal(e)}} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="small-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                    </div>
                <div className="p-4 md:p-5 space-y-4">
                    <p className="text-center leading-relaxed text-gray-500 dark:text-gray-400">
                        {info}
                    </p>
                    <p className="text-center  leading-relaxed text-gray-500 dark:text-gray-400">
                        난이도: {level} 문항수:{questionCount}
                    </p>
                </div>
                <div className="flex items-center justify-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button onClick={(e)=>{router.push(`/problem?stageId=${stageId}`)}}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">문제 풀러가기</button>
                    <button  onClick={(e)=>{closeModal(e)}} className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">다른 문제 찾아보기</button>
                </div>
            </div>
        </div>
    )
}

export default ProblemStageModal