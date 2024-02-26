'use client'
import React from 'react';


type loginType = {
    type:string,
    placeholder:string,
    onChange:React.Dispatch<React.SetStateAction<string>>
}


const LoginInput:React.FC<loginType> = ({type, placeholder,onChange}) => {
  return (
    <div className='loginSignUpInputContainer'>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e)=>onChange(e.target.value)}
      />
    </div>
  );
};

export default LoginInput;
