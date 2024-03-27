import React,{useEffect} from "react";
import useCheckAccess from "./useCheckAccess";

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
    isCompleted?:boolean,
    difficultyLevels?:string[],
    stageGroupTypes?:string[]
):void {
    const validAccessToken = useCheckAccess(accessToken, refreshToken);
    useEffect(()=>{
        const getStage = async () => {
            try{
                const params = {
                    page_index:"1",
                    page_size:"1",
                    isCompleted:isCompleted?isCompleted.toString():"",
                };
                const queryString = new URLSearchParams(params)
                difficultyLevels?.forEach(ele=>{queryString.append("difficultyLevels",ele)})
                stageGroupTypes?.forEach(ele=>{queryString.append("stageGroupTypes",ele)})
                queryString.toString()
                console.log(queryString)
                const newStage = await fetch(`${url}/api/stages`,{
                    method:"GET",
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization:`Bearer ${validAccessToken}`
                    },
                })
            }catch(error){
                console.error(error)
            }
        }
        getStage()
    },[validAccessToken,isCompleted,difficultyLevels,stageGroupTypes])
}

export default useGetStages