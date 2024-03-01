'use client'
import React from 'react';


type loginType = {
    name:string,
    id:string,
    type:string,
    placeholder:string,
    onChange:React.Dispatch<React.SetStateAction<string>>
}


const LoginInput:React.FC<loginType> = ({name,id,type, placeholder,onChange}) => {
  return (
    <div className='loginSignUpInputContainer my-3'>
      <input
        name={name}
        id={id}
        className='loginSignUpInput'
        type={type}
        placeholder={placeholder}
        onChange={(e)=>onChange(e.target.value)}
      />
    </div>
  );
};

export default LoginInput;
