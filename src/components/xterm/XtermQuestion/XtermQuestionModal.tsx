"use client"

import React, {useRef,useEffect,SetStateAction} from "react";

interface XtermModalType {
    ModalCheck:boolean,
    setModalState: React.Dispatch<SetStateAction<boolean>>;
}

const XtermModal: React.FC<XtermModalType> = ({ModalCheck,setModalState}) => {
    const startButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        startButtonRef.current?.focus();
    }, []);
    return (
        <div
            id="xterm-modal"
            tabIndex={-1}
            className={`${ModalCheck?"fixed flex":"hidden"} overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 w-full md:inset-0 max-h-full items-center justify-center bg-gray-600 bg-opacity-60`}
        >
            <div className="relative p-4 w-2/5 max-w-xl max-h-full">
                <div className="relative bg-gray-50 border-gray-300 rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            축하합니다!
                        </h3>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <p className="text-center leading-relaxed text-gray-700">
                            수고하셨습니다! 해당 스테이지의 모든 문제를 완료하였습니다.
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-4 md:p-5 border-t border-gray-300 rounded-b space-y-4">
                        <button
                            ref={startButtonRef}
                            type="button"
                            className="w-full h-12 mt-2 bg-blue-300 text-gray-50 rounded hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-700 focus:outline-none"
                            onClick={() => {
                                window.location.replace("/challengelist")
                                setModalState(false)
                            }}
                        >
                            다른 문제 보러가기
                        </button>
                        <button
                            type="button"
                            className="w-full h-12 mt-2 bg-blue-300 text-gray-50 rounded hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-700 focus:outline-none"
                            onClick={() => {
                                setModalState(false);
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