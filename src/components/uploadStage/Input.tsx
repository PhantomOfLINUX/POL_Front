"use client"

import React from "react";

interface InputProps {
    id: string;
    labelText: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({id, labelText, value, onChange, placeholder = "입력해주세요.", type = "text"}: {
    id: any;
    labelText: any;
    value: any;
    onChange: any;
    placeholder?: any;
    type?: any;
}) => {
    return (
        <div className="w-4/5 m-4 space-y-2 flex flex-1 flex-col">
            <label htmlFor="input" className="block ml-1 text-sm font-bold text-gray-900">
                {labelText}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                className="block w-full p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 hover:border-gray-600 focus:outline-2 focus:outline-gray-600"
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input