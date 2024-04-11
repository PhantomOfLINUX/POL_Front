"use client"

import React from "react";

import useGetXtermUrl from "@/hooks/useGetXtermUrl";

import Xterm from "./Xterm";

interface XtermBoxType {
    accessToken:string|undefined,
    refreshToken:string|undefined
}

const XtermBox:React.FC<XtermBoxType> = ({accessToken,refreshToken}) => {
    const {url,query} = useGetXtermUrl(accessToken,refreshToken);
    return (
        <div>
           <Xterm url={url} query={query}/>
        </div>
    )
}


export default XtermBox