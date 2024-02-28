import React from "react";
import dynamic from "next/dynamic";

const Xterm = dynamic(()=>import("@/components/xterm/Xterm"),{ssr:false})

const Problem = () => {
    
    return (
        <div>
            <Xterm/>
        </div>
    )
}


export default Problem;