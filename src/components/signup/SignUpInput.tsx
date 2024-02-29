'use client'

import React from 'react';
import { signType } from '@/types/signUptypes';

const SignUpInput = ({ label, type, placeholder, onChange, isVaild, errorMsg }:signType) => {
  return (
    <div className='min-h-24'>
      <label className='mb-1.5'>{label}</label>
      <div className='loginSignUpInputContainer'>
      <input
        className='loginSignUpInput'
        type={type}
        placeholder={placeholder}
        onChange={(e)=>onChange(e.target.value)}
      />
      </div>
      {isVaild&&<span className='text-xs text-vaild-color'>*{errorMsg}</span>}
    </div>
  );
};

export default SignUpInput;
