// XtermQuestionModal.tsx
"use client"

import React, { useRef, useEffect } from "react";
import useModalStore from "@/store/useModalStore";

const XtermModal: React.FC = () => {
    const startButtonRef = useRef<HTMLButtonElement>(null);
    const { ModalCheck, setModalCheck } = useModalStore();

    useEffect(() => {
        startButtonRef.current?.focus();
    }, []);

    return (
        <div
            id="xterm-modal"
            tabIndex={-1}
            className={`${ModalCheck ? "fixed flex" : "hidden"} overflow-y-auto overflow-x-hidden top-0 right-0 left-0 bottom-0 z-50 w-full h-full items-center justify-center bg-gray-600 bg-opacity-60`}
            style={{ zIndex: 1000 }}
        >
            <div className="relative p-4 w-2/5 max-w-xl max-h-full z-50">
                <div className="relative bg-gray-50 border-gray-300 rounded-lg shadow z-50">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t z-50">
                        <h3 className="text-xl font-semibold text-gray-900">
                            축하합니다!
                        </h3>
                    </div>
                    <div className="p-4 md:p-5 space-y-4 z-50">
                        <p className="text-center leading-relaxed text-gray-700">
                            수고하셨습니다! 해당 스테이지의 모든 문제를 완료하였습니다.
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-4 md:p-5 border-t border-gray-300 rounded-b space-y-4 z-50">
                        <button
                            ref={startButtonRef}
                            type="button"
                            className="w-full h-12 mt-2 bg-blue-300 text-gray-50 rounded hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-700 focus:outline-none z-50"
                            onClick={() => {
                                window.location.replace("/challengelist")
                                setModalCheck(false)
                            }}
                        >
                            다른 문제 보러가기
                        </button>
                        <button
                            type="button"
                            className="w-full h-12 mt-2 bg-blue-300 text-gray-50 rounded hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-700 focus:outline-none z-50"
                            onClick={() => {
                                setModalCheck(false);
                            }}
                        >
                            해당 스테이지 남아있기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default XtermModal;
