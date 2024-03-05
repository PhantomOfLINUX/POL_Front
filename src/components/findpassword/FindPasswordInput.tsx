'use client'
import React from 'react';


type findPassType = {
    type: string,
    placeholder: string,
    onChange: React.Dispatch<React.SetStateAction<string>>
}


const FindPasswordInput: React.FC<findPassType> = ({ type, placeholder, onChange }) => {
    return (
        <div className='loginSignUpInputContainer my-3'>
            <input
                className='loginSignUpInput'
                type={type}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default FindPasswordInput;
