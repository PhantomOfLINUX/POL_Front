import React from "react"

export type signType = {
    name:string,
    id:string,
    label: string;
    placeholder: string;
    type: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    isVaild?:boolean;
    errorMsg:string;
  }
