"use client"
import React from "react";
import Link from "next/link"

interface HeaderBtnType {
    href:string,
    value:string,
    className:string,
}

const HeaderBtn:React.FC<HeaderBtnType> = ({href,value,className}) => {
    return(
        <Link 
            href={`${href}`} 
            className={`${className}`}
        >
            {value}
        </Link>
    )
}

export default HeaderBtn