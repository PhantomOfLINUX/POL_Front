"use client"

import React from "react";

interface TextAreaProps {
    labelText: string;
    message: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rows?: number;
}

const Textarea: React.FC<TextAreaProps> = ({labelText, message, onChange, placeholder = "설명을 작성해주세요.", rows = 4}: {
    labelText: any;
    message: any;
    onChange: any;
    placeholder?: any;
    rows?: any
}) => {
    return (
        <div className="w-4/5 m-4 space-y-2 flex flex-1 flex-col">
            <label htmlFor="message" className="block ml-1 text-sm font-medium text-gray-900">
                {labelText}
            </label>
            <textarea
                id="message"
                value={message}
                onChange={onChange}
                rows={rows}
                className="block w-full h-full p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 hover:border-gray-600 focus:outline-2 focus:outline-gray-600 resize-none"
                placeholder={placeholder}
            />
        </div>
    )
}

export default Textarea