"use client"

import React from "react";

interface TextAreaProps {
    labelText: string;
    message: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({ labelText, message, onChange, placeholder = "설명을 작성해주세요.", rows = 4 }) => {
    return (
        <div className="w-4/5 m-8 space-y-2">
            <label htmlFor="message" className="block ml-2 text-sm font-medium text-gray-900">
                {labelText}
            </label>
            <textarea
                id="message"
                value={message}
                onChange={onChange}
                rows={rows}
                className="block w-full h-full p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder={placeholder}
            />
        </div>
    )
}

export default TextArea