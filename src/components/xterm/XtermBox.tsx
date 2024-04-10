"use client"

import React,{Suspense} from "react";

import useGetXtermUrl from "@/hooks/useGetXtermUrl";

import Xterm from "./Xterm";
import useCheckProblemSolved from "@/hooks/useCheckProblemSolved";

interface XtermBoxType {
    accessToken:string|undefined,
    refreshToken:string|undefined
}

const XtermBox:React.FC<XtermBoxType> = ({accessToken,refreshToken}) => {
    const {url,query} = useGetXtermUrl(accessToken, refreshToken);
    const problemSolvedCheck = useCheckProblemSolved(accessToken, refreshToken)
    console.log(problemSolvedCheck?.read())
    
    return (
        <Suspense fallback={<div>Loding...</div>}>
           {problemSolvedCheck?.read().exists&&<Xterm url={url} query={query}/>}
        </Suspense>
    )
}


export default XtermBox

/*
먼저 스테이지 check 
true면 - 모달창
false면 - 넘어가기

*/