import React from "react";

interface ProblemStagePageNationBtnType {
    pageBtn: number | string;
    curPage?: number;
    pageMove: () => void;
    checked?: boolean;
}

const ProblemStagePageNationBtn: React.FC<ProblemStagePageNationBtnType> = ({
                                                                                pageBtn,
                                                                                curPage,
                                                                                pageMove,
                                                                                checked,
                                                                            }) => {
    const isCurrentPage = pageBtn === curPage;
    const isDisabled = checked;

    let className = "w-9 h-9 flex justify-center items-center border-t border-b border-solid";


    if (isDisabled) {
        className += " text-gray-600";
    }

    if (isCurrentPage) {
        className += " bg-blue-500 border-blue-500 text-gray-50 z-10 hover:bg-blue-400";
    } else {
        className += " border-gray-400 hover:bg-gray-100 hover:text-gray-700";
    }

    if (pageBtn === "<") {
        className += " rounded-s-lg border-l border-r";
    } else if (pageBtn === ">") {
        className += " rounded-e-lg border-r";
    } else {
        className += " border-r";
    }

    return (
        <button disabled={isDisabled} onClick={pageMove} className={className}>
            {typeof pageBtn === "string" ? (
                <svg
                    className={`w-3 h-3 ${pageBtn === ">" ? "rtl:rotate-180" : ""}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d={pageBtn === ">" ? "m1 9 4-4-4-4" : "M5 1 1 5l4 4"}
                    />
                </svg>
            ) : (
                pageBtn
            )}
        </button>
    );
};

export default ProblemStagePageNationBtn;