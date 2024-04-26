'use client'

import React from 'react';
import { signType } from '@/types/signUptypes';

const SignUpInput = ({ name, id, label, type, placeholder, onChange, isValid, errorMsg }:signType) => {
  return (
    <div className='min-h-24'>
      <label className='mb-1.5'>{label}</label>
      <div className='loginSignUpInputContainer'>
      <input
        name={name}
        id={id}
        className={`loginSignUpInput ${isValid ? 'border-danger-500 hover:border-danger-600 focus:border-danger-600' : ''}`}
        type={type}
        placeholder={placeholder}
        onChange={(e)=>onChange(e.target.value)}
      />
      </div>
      {isValid&&<span className='text-xs mb-2 text-danger-600'>*{errorMsg}</span>}
    </div>
  );
};

export default SignUpInput;
