'use client'

import React from 'react';
import { signType } from '@/types/signUptypes';

type loginType = {
    label:string,
    type:string,
    placeholder:string,
    name:string,
    onChange: React.Dispatch<React.SetStateAction<string>>
}


const LoginInput = ({ label, type, placeholder,onChange}:loginType) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e)=>onChange(e.target.value)}
      />
    </div>
  );
};

export default LoginInput;
