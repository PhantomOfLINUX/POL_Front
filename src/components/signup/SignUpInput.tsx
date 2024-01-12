'use client'

import React from 'react';
import { signType } from '@/types/signUptypes';

const SignUpInput = ({ label, type, placeholder, onChange, isVaild, errorMsg }:signType) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e)=>onChange(e.target.value)}
      />
      {isVaild&&<span>{errorMsg}</span>}
    </div>
  );
};

export default SignUpInput;
