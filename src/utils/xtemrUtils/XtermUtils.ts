import React, { SetStateAction } from "react";

const url = process.env.NEXT_PUBLIC_BASE_API


export const connectWebSocket = (url:string) => {
    let websocket = new WebSocket(url);
    let websocketPing:any;
    websocket.onerror = (error) =>{
        console.error(error)
        websocket = connectWebSocket(url);
    }
    websocket.onopen = () => {
        websocketPing = setInterval(()=>{
            websocket.send("")
            console.log("ping!!")
        },30000)
    }
    websocket.onclose = () => {
        clearInterval(websocketPing)
    }
    return websocket   
}


export const checkQuestion = (answer:string,questionIndex:number,stageId:string | null,accessToken:string|undefined,setQusetion_index:React.Dispatch<SetStateAction<number>>,setIsIncorrect:React.Dispatch<SetStateAction<boolean>>,setInputValue:React.Dispatch<SetStateAction<string>>) => {
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
            .then(async (res)=>{
                if(res.isCorrect){
                    if(res.isLast){
                        //모달창 이용
                    }
                    if(res.isComposable){
                       await composeQuestion(answer,questionIndex,stageId,accessToken);
                    }
                    console.log("end")
                    setQusetion_index(res.nextIndex)
                    setInputValue("")
                }else{
                    setIsIncorrect(true)
                }
            })

        }catch(err){
            console.error(err)
        }}
}


const composeQuestion = async (answer:string,questionIndex:number,stageId:string | null,accessToken:string|undefined) => {
    try{
        await fetch(`${url}/api/question/compose`,{
            method:"POST",
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization:`Bearer ${accessToken}`
            },
            body:JSON.stringify({stageId,questionIndex,answer})
        }).then(res=>res.json()).then(res=>{console.log(res)})
    }
    catch(err){
        console.error(err)
    }
}