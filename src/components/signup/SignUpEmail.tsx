// EmailInput.js
import React from 'react';
import { signType } from '@/types/signUptypes';
const EmailInput = ({ label, placeholder, onChange }:signType) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="email"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default EmailInput;
