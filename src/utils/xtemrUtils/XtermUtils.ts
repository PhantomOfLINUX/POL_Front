import { Terminal } from "xterm";

const url = process.env.NEXT_PUBLIC_BASE_API

import { wrapPromise, Resource } from "@/lib/wrappingPromise";

interface useGetXtermUrlType {
    url:string,
    query:string
}

export function getXtermUrl( 
    validAccessToken:string|undefined,
    problemSolvedCheck:boolean|undefined,
    ModalCheck:boolean,
    XtermUrlCheck:boolean,
    stageID:string|null
):Resource<useGetXtermUrlType> | undefined{
    let promise = undefined
    if(problemSolvedCheck&&!ModalCheck&&!XtermUrlCheck){//problemSolvedCheck&&ModalCheck true modal open, XtermUrlCheck false
        const getXtermUrl = fetch(`${url}/lab/terminal/access-url/${stageID}`, {
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization:`Bearer ${validAccessToken}`
                }
            }).then(res=> {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .catch(error=>console.error(error))
        promise = wrapPromise(getXtermUrl);
    }
    else if(!problemSolvedCheck||(problemSolvedCheck&&!ModalCheck&&XtermUrlCheck)){//problemSolvedCheck&&ModalCheck false modal open, XtermUrlCheck false
        const postXtermUrl = fetch(`${url}/lab/terminal/stage/${stageID}`, {
            method:"POST",    
            headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization:`Bearer ${validAccessToken}`
                }
            }).then(res=> {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .catch(error=>console.error(error))
        promise = wrapPromise(postXtermUrl);
    }
    return promise
}


export const connectWebSocket = (url:string) => {
    let websocket = new WebSocket(url);
    websocket.onerror = (error) =>{
        console.error(error)
        websocket = connectWebSocket(url);
    }
    return websocket   
}