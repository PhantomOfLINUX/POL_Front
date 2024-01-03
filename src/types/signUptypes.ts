import React from "react"

export type signType = {
    label:string,
    placeholder:string, 
    onChange:(newValue: React.ChangeEvent<HTMLInputElement>) => void
}