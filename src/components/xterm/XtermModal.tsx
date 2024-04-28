import React, { SetStateAction, useRef, useEffect } from "react";

interface XtermModalType {
    setModalState: React.Dispatch<SetStateAction<boolean>>;
    setXtermUrlCheck: React.Dispatch<SetStateAction<boolean>>;
}

const XtermModal: React.FC<XtermModalType> = ({ setModalState, setXtermUrlCheck }) => {
    const closeModal = () => setModalState(false);
    const startButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        startButtonRef.current?.focus();
    }, []);

    return (
        <div
            id="xterm-modal"
            tabIndex={-1}
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex items-center justify-center bg-gray-600 bg-opacity-60"
        >
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-gray-50 border-gray-300 rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            문제를 풀던 흔적을 찾았습니다!
                        </h3>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <p className="text-center leading-relaxed text-gray-700">
                            문제를 처음부터 다시 풀이할 경우,<br /> 터미널 초기화 작업에 시간이 약 1분 소요됩니다.
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-4 md:p-5 border-t border-gray-300 rounded-b space-y-4">
                        <button
                            ref={startButtonRef}
                            type="button"
                            className="w-80 h-12 mt-2 bg-blue-300 text-gray-50 rounded hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-700 focus:outline-none"
                            onClick={() => setModalState(false)}
                        >
                            처음부터 문제 풀기
                        </button>
                        <button
                            type="button"
                            className="w-80 h-12 mt-2 bg-blue-300 text-gray-50 rounded hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-700 focus:outline-none"
                            onClick={() => {
                                setXtermUrlCheck(false);
                                setModalState(false);
                            }}
                        >
                            이어서 문제 풀기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default XtermModal;