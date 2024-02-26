'use client'
import React from 'react';


type loginType = {
    label:string,
    type:string,
    placeholder:string,
    onChange:React.Dispatch<React.SetStateAction<string>>
}


const LoginInput:React.FC<loginType> = ({ label, type, placeholder,onChange}) => {
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
