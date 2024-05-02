import React, {SetStateAction} from "react";
import {useRouter} from "next/navigation";

interface ProblemStageModalType {
    modalState: boolean;
    stageId: string;
    title: string;
    info: string;
    level: string;
    questionCount: number;
    setModalState: React.Dispatch<SetStateAction<boolean>>;
}

const ProblemStageModal: React.FC<ProblemStageModalType> = ({
                                                                modalState,
                                                                stageId,
                                                                title,
                                                                info,
                                                                level,
                                                                questionCount,
                                                                setModalState,
                                                            }) => {
    const router = useRouter();
    const closeModal = () => setModalState(false);

    return (
        <div
            id="problem-stage-modal"
            tabIndex={-1}
            aria-hidden={!modalState}
            className={`${
                modalState ? "" : "hidden"
            } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] min-h-full flex items-center justify-center bg-gray-600 bg-opacity-60`}
            onClick={(e) => {
                e.preventDefault();
                closeModal()
            }}
        >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-gray-50 border-gray-300 rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-medium text-gray-900">
                            {title}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            data-modal-hide="problem-stage-modal"
                            onClick={closeModal}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <p className="text-base leading-relaxed text-gray-700">
                            {info}
                        </p>
                        <div className="flex justify-end space-x-4">
                            <p className="text-sm leading-relaxed text-gray-700">
                                난이도: {level}
                            </p>
                            <p className="text-sm leading-relaxed text-gray-700">
                                문항수: {questionCount}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end items-center p-4 md:p-5 border-t border-gray-300 rounded-b">
                        <button
                            type="button"
                            className="text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm px-5 py-2.5 text-center"
                            onClick={() => router.push(`/problem?stageId=${stageId}`)}
                        >
                            문제 풀어보기
                        </button>
                        <button
                            data-modal-hide="problem-stage-modal"
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm font-normal text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100"
                            onClick={closeModal}
                        >
                            다른 문제 둘러보기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemStageModal;