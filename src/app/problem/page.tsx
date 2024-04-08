import React from "react";
import dynamic from "next/dynamic";

const XtermContainer = dynamic(()=>import("@/components/xterm/XtermContainer"),{ssr:false})

const Problem = () => {
    
    return (
        <div>
            <XtermContainer/>
        </div>
    )
}


export default Problem;