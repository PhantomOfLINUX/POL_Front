import React,{useEffect,useState} from "react";
import useCheckAccess from "./useCheckAccess";

import { useSearchParams } from 'next/navigation'


const url = process.env.NEXT_PUBLIC_BASE_API

interface pageParameters {
    currentPageIndex:number,
    currentPageOfElement:number,
    pageSize:number,
    totalPages:number,
}

interface stages {
    description:string,
    difficultyLevelType:string,
    id:number,
    questionCount:number,
    stageGroupType:string,
    title:string
}

interface problemStage {
    pageParameters:pageParameters,
    stages:stages[]
}

function useGetStages(
    accessToken:string|undefined,
    refreshToken:string|undefined,
):problemStage|undefined {
    const validAccessToken = useCheckAccess(accessToken, refreshToken);
    const searchParams = useSearchParams();
    const [problemStages,setProblemStages] = useState<problemStage|undefined>()

    useEffect(()=>{
        const getStage = async () => {
            try{
                const isCompleted = searchParams.get("isCompleted")?.split(",")
                const difficultyLevels = searchParams.get("difficultyLevels")?.split(",")
                const stageGroupTypes = searchParams.get("stageGroupTypes")?.split(",")
                const params = {
                    page_index:"1",
                    page_size:"1",
                };
                const queryString = new URLSearchParams(params)
                difficultyLevels?.forEach(level=>{queryString.append("difficultyLevels",level)})
                stageGroupTypes?.forEach(groupType=>{queryString.append("stageGroupTypes",groupType)})
                isCompleted?.forEach(com=>{queryString.append("isCompleted",com)})
                queryString.toString()

                const newStage = await fetch(`${url}/api/stages?${queryString}`,{
                    method:"GET",
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization:`Bearer ${validAccessToken}`
                    },
                })
                const newStageData = await newStage.json();
                if(newStage.ok&&JSON.stringify(problemStages)!==JSON.stringify(newStageData)){
                    setProblemStages(newStageData)
                }
            }catch(error){
                console.error(error)
            }

        }
        getStage()
    },[validAccessToken,searchParams,problemStages])

    return problemStages
}

export default useGetStages