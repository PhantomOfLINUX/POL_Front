import React from "react";

import {cookies} from "next/headers";
import UploadStageForm from "@/components/uploadStage/UploadStageForm";

const UploadStage = () => {
    const cookiesStore = cookies();
    const POL_ACCESS_TOKEN = cookiesStore.get("POL_ACCESS_TOKEN")?.value
    const POL_REFRESH_TOKEN = cookiesStore.get("POL_REFRESH_TOKEN")?.value

    return (
        <main className="w-full h-full flex justify-center bg-gray-50">
            <UploadStageForm
                accessToken={POL_ACCESS_TOKEN}
                refreshToken={POL_REFRESH_TOKEN}
            />
        </main>
    );
}


export default UploadStage
