"use client"

import React, { useState } from "react";

const AnswerCheckButton = () => {
    const [isShaking, setIsShaking] = useState(false);

    const handleShake = () => {
        setIsShaking(true);
        setTimeout(() => {
            setIsShaking(false);
        }, 600);
    };

    return (
        <button
            className={`bg-blue-500 text-gray-50 font-bold py-2 px-4 rounded ${isShaking ? 'animate-shake bg-danger-500' : ''}`}
            onClick={handleShake}
        >
            Check Answer
        </button>
    );
}

export default AnswerCheckButton;
