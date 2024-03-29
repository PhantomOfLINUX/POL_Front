"use client"
import React from "react";
import Link from "next/link"

interface HeaderBtnType {
    href:string,
    children:string,
    className:string,
}

const HeaderBtn:React.FC<HeaderBtnType> = ({href,children,className}) => {
    return(
        <Link 
            href={`${href}`} 
            className={`${className}`}
        >
            {children}
        </Link>
    )
}

export default HeaderBtn