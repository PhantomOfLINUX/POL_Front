import React from "react";

interface SelectBoxProps {
    id: string;
    labelText: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
}

const SelectBox: React.FC<SelectBoxProps> = ({ id, labelText, value, onChange, options }) => {
    return (
        <div className="w-4/5 m-4 space-y-2">
            <label htmlFor={id} className="block ml-1 text-sm font-medium text-gray-900">
                {labelText}
            </label>
            <select
                id={id}
                value={value}
                onChange={onChange}
                className="block w-full p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 hover:border-gray-600 focus:outline-2 focus:outline-gray-600"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectBox;