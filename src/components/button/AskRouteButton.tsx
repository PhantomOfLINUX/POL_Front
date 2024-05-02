"use client"

import React from "react";
import {useRouter} from "next/navigation";

interface ButtonProps {
    labelText?: string;
    toPath?: string;
}

const AskRouteButton: React.FC<ButtonProps> = ({labelText,toPath = "/"}) => {
    const router = useRouter();

    const handleClick = () => {
        if (toPath) {
            router.push(toPath);
        }
    };

    return (
        <div className="w-1/12 m-4 space-y-2 flex flex-1 flex-col">
            <button
                onClick={handleClick}
                className="block min-h-4 p-2 text-sm font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg"
            >
                {labelText}
            </button>
        </div>
    );
};

export default AskRouteButton;