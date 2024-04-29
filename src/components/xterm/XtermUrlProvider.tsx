import React from "react";

import {Resource} from "@/lib/wrappingPromise";

import Xterm from "./Xterm";

interface xtermUrlType {
    url: string,
    query: string
}

interface XtermUrlProviderType {
    xtermConnectUrl: Resource<xtermUrlType> | undefined
}


const XtermUrlProvider: React.FC<XtermUrlProviderType> = ({xtermConnectUrl}) => {
    return (
        <>
            <Xterm url={xtermConnectUrl?.read()?.url} query={xtermConnectUrl?.read()?.query}/>
        </>
    )
}

export default XtermUrlProvider