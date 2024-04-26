import React from "react";

import XtermQuestion from "./XtermQuestion";
import XtermCheckProvider from "./XtermCheckProvider";

import { cookies } from "next/headers";

const XtermContainer = () => {
    const cookiesStore = cookies();
    const POL_ACCESS_TOKEN = cookiesStore.get("POL_ACCESS_TOKEN")?.value
    const POL_REFRESH_TOKEN = cookiesStore.get("POL_REFRESH_TOKEN")?.value
    return (
        <main>
            <XtermQuestion/>
            <XtermCheckProvider 
                accessToken={POL_ACCESS_TOKEN}
                refreshToken={POL_REFRESH_TOKEN}
            />               
        </main>
    )
}


export default XtermContainer