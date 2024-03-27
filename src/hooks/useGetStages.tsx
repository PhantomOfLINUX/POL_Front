import React,{useEffect,useState} from "react";
import useCheckAccess from "./useCheckAccess";

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
    isCompleted?:string[],
    difficultyLevels?:string[],
    stageGroupTypes?:string[]
):problemStage|undefined {
    const validAccessToken = useCheckAccess(accessToken, refreshToken);
    const [problemStages,setProblemStages] = useState<problemStage|undefined>()
    useEffect(()=>{
        const getStage = async () => {
            try{
                const params = {
                    page_index:"1",
                    page_size:"5",
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
                if(newStage.ok&&JSON.stringify(newStageData)!==JSON.stringify(problemStages)){
                    setProblemStages(newStageData)
                }
            }catch(error){
                console.error(error)
            }

        }
        getStage()
    },[validAccessToken,isCompleted,difficultyLevels,stageGroupTypes])

    return problemStages
}

export default useGetStages