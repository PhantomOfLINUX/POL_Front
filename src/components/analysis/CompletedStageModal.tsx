"use client"

import React, { useEffect, useState } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    leftContent: string[];
    rightContent: string[];
}

const CompletedStageModal: React.FC<ModalProps> = ({ isOpen, onClose, leftContent, rightContent }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 10000); // 10초 후에 로딩 완료

            return () => clearTimeout(timer); // 클린업 함수
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-3/4 h-3/4 p-4 rounded-xl flex relative">
                <div className="w-1/2 p-4 border-r border-gray-300 overflow-y-auto bg-gray-900 text-gray-0">
                    <h1 className="text-center text-2xl font-bold mb-4">실습로그</h1>
                    {leftContent.map((line, index) => (
                        <pre key={index} className="whitespace-pre-wrap mb-2">{line}</pre>
                    ))}
                </div>
                <div className="w-1/2 p-4 flex flex-col justify-center items-center overflow-y-auto">
                    <h1 className="text-center text-2xl font-bold mb-4">분석결과</h1>
                    {isLoading ? (
                        <div className="text-center">
                            <p className="text-xl mb-4">데이터를 분석중이에요.</p>
                            <p className="text-lg">10초 정도만 기다려 주세요</p>
                        </div>
                    ) : (
                        <div className="h-5/6 overflow-y-auto text-left">
                            {rightContent.map((line, index) => (
                                <p key={index} className="mb-2 break-words">{line}</p>
                            ))}
                        </div>
                    )}
                </div>
                <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    );
}

export default CompletedStageModal;
