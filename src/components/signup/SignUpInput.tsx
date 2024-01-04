'use client'

import React from 'react';
import { signType } from '@/types/signUptypes';

const SignUpInput = ({ label, type, placeholder, onChange }:signType) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SignUpInput;
