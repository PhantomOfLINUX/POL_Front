'use client'
import React from 'react';


type loginType = {
  name: string,
  id: string,
  type: string,
  placeholder: string,
  onChange: React.Dispatch<React.SetStateAction<string>>
}


const LoginInput: React.FC<loginType> = ({ name, id, type, placeholder, onChange }) => {
  return (
    <div className='loginSignUpInputContainer my-3'>
      <input
        name={name}
        id={id}
        className='loginSignUpInput border-2 border-gray-400 hover:ring-1 hover:ring-blue-500 focus:ring-blue-600 active:ring-blue-600'
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />

    </div>
  );
};

export default LoginInput;
