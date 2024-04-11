import React from "react";

import { Resource } from "@/lib/wrappingPromise";

import Xterm from "./Xterm";

interface xtermUrlType {
    url:string,
    query:string
  }
  
interface XtermUrlProviderType{
    xtemrConnectUrl:Resource<xtermUrlType>|undefined
  }
  

const XtermUrlProvider:React.FC<XtermUrlProviderType> = ({xtemrConnectUrl}) => {
    return (
        <>
            <Xterm url={xtemrConnectUrl?.read().url} query={xtemrConnectUrl?.read().query}/>
        </>
    )
}

export default XtermUrlProvider