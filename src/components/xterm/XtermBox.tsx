"use client"

import React,{Suspense,useState} from "react";

import type { Resource } from "@/lib/wrappingPromise";

import Xterm from "./Xterm";

interface CheckProblem {
    uid: string;
    stageId: number;
    stageCode: string;
    exists: boolean;
}

interface XtermBoxType {
    accessToken:string|undefined,
    refreshToken:string|undefined
    problemSolvedCheck:Resource<CheckProblem> | undefined
}

const XtermBox:React.FC<XtermBoxType> = ({accessToken,refreshToken,problemSolvedCheck}) => {
    const [ModalCheck,setModalCheck] = useState<boolean>(true);
    console.log(problemSolvedCheck)
    return (
        <div>
            {problemSolvedCheck?.read().exists&&ModalCheck?<div>asd</div>:<div>xcvc</div>}
        </div>
    )
}


export default XtermBox