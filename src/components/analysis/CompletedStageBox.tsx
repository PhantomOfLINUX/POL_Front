"use client"

import React, { useState } from "react";
import CompletedStageModal from "./CompletedStageModal";

interface BoxProps {
    stage: string;
    clearDate: string;
    description: string;
    leftContent: string[];
    rightContent: string[];
}

const CompletedStageBox: React.FC<BoxProps> = ({ stage, clearDate, description, leftContent, rightContent }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div
                className="h-52 flex flex-col items-center justify-center border-2 border-solid border-gray-300 rounded-3xl my-12 px-4 py-4 mx-4 bg-gray-50 cursor-pointer"
                onClick={handleOpenModal}
            >
                <h2 className="text-xl font-bold">{stage}</h2>
                <p className="text-gray-600">{clearDate}</p>
                <p className="text-gray-800">{description}</p>
            </div>
            <CompletedStageModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                leftContent={leftContent}
                rightContent={rightContent}
            />
        </div>
    );
}

export default CompletedStageBox;
