"use client"

import React from "react";

import useGetXtermUrl from "@/hooks/useGetXtermUrl";

import Xterm from "./Xterm";

interface XtermBoxType {
    accessToken:string|undefined,
    refreshToken:string|undefined
}

const XtermBox:React.FC<XtermBoxType> = ({accessToken,refreshToken}) => {
    const {url,xHeaders} = useGetXtermUrl(accessToken,refreshToken);
    console.log(url,xHeaders)
    return (
        <div>
            <Xterm/>
        </div>
    )
}


export default XtermBox