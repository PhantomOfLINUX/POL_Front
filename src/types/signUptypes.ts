import React from "react"

export type signType = {
    label: string;
    placeholder: string;
    type:string;
    onChange:(newValue: string) => void;
    abled:boolean
}