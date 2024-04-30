import React from "react";

import XtermCheckProvider from "./XtermCheckProvider";

import {cookies} from "next/headers";

const XtermContainer = () => {
    const cookiesStore = cookies();
    const POL_ACCESS_TOKEN = cookiesStore.get("POL_ACCESS_TOKEN")?.value
    const POL_REFRESH_TOKEN = cookiesStore.get("POL_REFRESH_TOKEN")?.value
    return (
        <main className="bg-gray-50 h-screen relative">
            <div className="w-full h-72 bg-blue-500 absolute z-0"/>
            <XtermCheckProvider
                accessToken={POL_ACCESS_TOKEN}
                refreshToken={POL_REFRESH_TOKEN}
            />
        </main>
    )
}


export default XtermContainer