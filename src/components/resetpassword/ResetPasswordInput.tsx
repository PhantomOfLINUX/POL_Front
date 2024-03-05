'use client'
import React from 'react';


export type resetType = {
    label: string;
    placeholder: string;
    type: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    isVaild?: boolean;
    errorMsg: string;
}


const ResetPasswordInput = ({ label, type, placeholder, onChange, isVaild, errorMsg }: resetType) => {
    return (
        <div className='min-h-24'>
            <label>{label}</label>
            <div className='loginSignUpInputContainer'>
                <input
                    className='loginSignUpInput'
                    type={type}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
            {isVaild && <span className='text-xs text-vaild-color'>*{errorMsg}</span>}
        </div>
    );
};

export default ResetPasswordInput;
