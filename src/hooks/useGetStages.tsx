import React,{useEffect} from "react";

const url = process.env.NEXT_PUBLIC_BASE_API

interface stages{
    id: number,
    title: string,
    description: "string",
    stageGroupType: string,
    difficultyLevelType: string,
    questionCount: number
}

function useGetStages(
    accessToken:string,
    refreshToken:string,
    isCompleted?:string[],
    difficultyLevels?:string[],
    stageGroupTypes?:string[]
):void {
    useEffect(()=>{
        
    },[refreshToken,accessToken,isCompleted,difficultyLevels,stageGroupTypes])
}

export default useGetStages