import React from "react"

export type signType = {
    label: string;
    placeholder: string;
    type:string;
    onChange:(newValue: string) => void;
    abled:boolean
}

export type signOnChangetype = {
    setState:(e:string)=>void;
    e:React.ChangeEvent<HTMLInputElement>;
    checkCondition:(e:string)=>boolean;
}