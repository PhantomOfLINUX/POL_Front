"use client"

import React from "react";

interface ButtonProps {
    id: string;
    labelText: string;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({id, labelText, onClick, className = "", disabled = false}: {
    id: any;
    labelText: any;
    onClick: any;
    className?: any;
    disabled?: any;
}) => {
    return (
        <div className="w-4/5 m-4 space-y-2 flex flex-1 flex-col">
            <button
                id={id}
                onClick={onClick}
                className={`block w-full min-h-4 p-2 text-sm text-white bg-blue-500 rounded-lg border border-blue-500 hover:bg-blue-600 focus:outline-2 focus:outline-blue-600 ${className}`}
                disabled={disabled}
            >
                {labelText}
            </button>
        </div>
    )
}

export default Button