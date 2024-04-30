"use client"

import React from "react";

interface ShakeButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const ShakeButton: React.FC<ShakeButtonProps> = ({ children, onClick, className }) => {
    return (
        <button
            className={`bg-blue-500 text-gray-50 p-4 m-4 hover:animate-shake ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default ShakeButton