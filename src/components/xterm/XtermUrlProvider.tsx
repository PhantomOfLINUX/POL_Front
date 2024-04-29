import React from "react";

import {Resource} from "@/lib/wrappingPromise";

import Xterm from "./Xterm";
import XtermQuestion from "./XtermQuestion";

interface xtermUrlType {
    url: string,
    query: string
}

interface XtermUrlProviderType {
    xtermConnectUrl: Resource<xtermUrlType> | undefined
}


const XtermUrlProvider: React.FC<XtermUrlProviderType> = ({xtermConnectUrl}) => {
    return (
        <div className="flex">  
            <XtermQuestion/>
            <Xterm url={xtermConnectUrl?.read()?.url} query={xtermConnectUrl?.read()?.query}/>
        </div>
    )
}

export default XtermUrlProvider