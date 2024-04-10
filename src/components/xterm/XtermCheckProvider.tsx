"use client"

import React,{Suspense} from "react";

import useCheckProblemSolved from "@/hooks/useCheckProblemSolved";

import XtermBox from "./XtermBox";

interface XtermCheckProviderType {
    accessToken:string|undefined,
    refreshToken:string|undefined
}

const XtermCheckProvider:React.FC<XtermCheckProviderType> = ({accessToken,refreshToken}) => {
    const problemSolvedCheck = useCheckProblemSolved(accessToken, refreshToken) 
    return (
        <Suspense fallback={<div>Loding...</div>}>
            <XtermBox problemSolvedCheck={problemSolvedCheck} accessToken={accessToken} refreshToken={refreshToken}/>
        </Suspense>
    )
}


export default XtermCheckProvider