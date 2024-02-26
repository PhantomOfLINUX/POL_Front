'use client'

import React from 'react';
import { signType } from '@/types/signUptypes';

const SignUpInput = ({ label, type, placeholder, onChange, isVaild, errorMsg }:signType) => {
  return (
    <div>
      <label>{label}</label>
      <div className='loginSignUpInputContainer'>
      <input
      className='loginSignUpInput'
        type={type}
        placeholder={placeholder}
        onChange={(e)=>onChange(e.target.value)}
      />
      </div>
      {isVaild&&<span>{errorMsg}</span>}
    </div>
  );
};

export default SignUpInput;
