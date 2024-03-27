import React,{useEffect} from "react";
import useCheckAccess from "./useCheckAccess";

const url = process.env.NEXT_PUBLIC_BASE_API

function useGetStages(
    accessToken:string|undefined,
    refreshToken:string|undefined,
    isCompleted?:string[],
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
                };
                const queryString = new URLSearchParams(params)
                difficultyLevels?.forEach(level=>{queryString.append("difficultyLevels",level)})
                stageGroupTypes?.forEach(groupType=>{queryString.append("stageGroupTypes",groupType)})
                isCompleted?.forEach(com=>{queryString.append("isCompleted",com)})
                console.log(queryString)
                queryString.toString()
                const newStage = await fetch(`${url}/api/stages?${queryString}`,{
                    method:"GET",
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization:`Bearer ${validAccessToken}`
                    },
                }).then(res=>res.json())
            }catch(error){
                console.error(error)
            }

        }
        getStage()
    },[validAccessToken,isCompleted,difficultyLevels,stageGroupTypes])
}

export default useGetStages