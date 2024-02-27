'use client'
import React from 'react';


type loginType = {
    type:string,
    placeholder:string,
    onChange:React.Dispatch<React.SetStateAction<string>>
}


const LoginInput:React.FC<loginType> = ({type, placeholder,onChange}) => {
  return (
    <div className='loginSignUpInputContainer my-3'>
      <input
        className='loginSignUpInput'
        type={type}
        placeholder={placeholder}
        onChange={(e)=>onChange(e.target.value)}
      />
    </div>
  );
};

export default LoginInput;
