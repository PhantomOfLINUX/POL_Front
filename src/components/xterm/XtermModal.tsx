import React, { SetStateAction } from "react";


interface XternModalType {
    setModalState:React.Dispatch<SetStateAction<boolean>>
    setXtermUrlCheck:React.Dispatch<SetStateAction<boolean>>
}


const XtermModal:React.FC<XternModalType> = ({setModalState,setXtermUrlCheck}) => {
    return (
        <div className="flex items-center justify-center fixed z-50 w-full h-full p-4 bg-OpaqueBackground-color md:inset-0">
            <div className="absolute max-w-md max-h-full bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            문제를 푼 흔적이 있습니다!
                        </h3>
                    </div>
                <div className="p-4 md:p-5 space-y-4">
                    <p className="text-center leading-relaxed text-gray-500 dark:text-gray-400">
                        문제를 이어서 풀 경우 <br/> 터미널을 불러와 일정 시간 소요됩니다!
                    </p>
                </div>
                <div className="flex items-center justify-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button onClick={(e)=>{setModalState(false)}}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">새로 문제 풀기</button>
                    <button onClick={(e)=>{setXtermUrlCheck(false); setModalState(false)}} className="text-white ms-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">이어서 문제 풀기</button>
                </div>
            </div>
        </div>
    )
}

export default XtermModal