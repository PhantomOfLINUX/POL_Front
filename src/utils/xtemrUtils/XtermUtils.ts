import React, { SetStateAction } from "react";

const url = process.env.NEXT_PUBLIC_BASE_API


export const connectWebSocket = (url:string) => {
    let websocket = new WebSocket(url);
    websocket.onerror = (error) =>{
        console.error(error)
        websocket = connectWebSocket(url);
    }
    return websocket   
}


export const checkQuestion = (answer:string,questionIndex:number,stageId:string | null,accessToken:string|undefined,setQusetion_index:React.Dispatch<SetStateAction<number>>,setIsIncorrect:React.Dispatch<SetStateAction<number>>,setInputValue:React.Dispatch<SetStateAction<string>>) => {
    if(stageId&&accessToken){
        try{
            fetch(`${url}/api/questions/grading`,{
                method:"POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization:`Bearer ${accessToken}`
                },
                body:JSON.stringify({stageId,questionIndex,answer})
            }).then(res=>res.json())
            .then(res=>{
                if(res.isCorrect){
                    if(res.isLast){
                        
                    }
                    else{
                        setQusetion_index(res.nextIndex)
                        setIsIncorrect(0)
                        setInputValue("")
                    }
                }else{
                    setIsIncorrect((pre)=>pre+1)
                }
            })

        }catch(err){
            console.error(err)
        }}
}