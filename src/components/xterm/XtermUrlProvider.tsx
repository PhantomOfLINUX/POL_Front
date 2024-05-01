import React from "react";

import {Resource} from "@/lib/wrappingPromise";

import Xterm from "./Xterm";
import XtermQuestion from "./XtermQuestion";

interface xtermUrlType {
    url: string,
    query: string
}

interface XtermUrlProviderType {
    accessToken: string | undefined,
    refreshToken: string | undefined,
    xtermConnectUrl: Resource<xtermUrlType> | undefined
}


const XtermUrlProvider: React.FC<XtermUrlProviderType> = ({xtermConnectUrl,accessToken,refreshToken}) => {
    return (
        <div className="flex w-full h-full justify-evenly pt-20 z-10">  
            <XtermQuestion accessToken={accessToken} refreshToken={refreshToken}/>
            <Xterm url={xtermConnectUrl?.read()?.url}  query={xtermConnectUrl?.read()?.query}/>
        </div>
    )
}

export default XtermUrlProvider