'use client'

import React from 'react';
import { signType } from '@/types/signUptypes';

const SignUpInput = ({ label, type, placeholder, onChange, abled }:signType) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e)=>onChange(e.target.value)}
        disabled={abled}
      />
    </div>
  );
};

export default SignUpInput;
