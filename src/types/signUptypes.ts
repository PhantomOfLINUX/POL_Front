import React from "react"

export type signType = {
    label: string;
    placeholder: string;
    type:string;
    onChange:(newValue: React.ChangeEvent<HTMLInputElement>) => void
}