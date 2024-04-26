import { Terminal } from "xterm";

const url = process.env.NEXT_PUBLIC_BASE_API

import { wrapPromise, Resource } from "@/lib/wrappingPromise";

const handleTerminal = (Terminal:Terminal) => {
     let curr_line = ""
    Terminal.onKey((e) => {
        let { key } = e;
        //socket 연결
        if (key === "\r") {//endter
          if (curr_line) {
            Terminal.write("\r")
          }
        } else if (key === "\x7F") {
          if (curr_line.length > 0) {
            curr_line = curr_line.slice(0, curr_line.length - 1);
            Terminal.write('\b \b');
          }
        } else {//other key
          curr_line += key;
          Terminal.write(key)
        }
      });//key 작업 모듈화 필요
}


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
