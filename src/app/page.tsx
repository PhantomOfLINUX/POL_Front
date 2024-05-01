import React from "react";
import Link from "next/link";

import MainGoButton from "@/components/mainGoButton/MainGoButton";
import ComponentViewGoButton from "@/components/mainGoButton/ComponentViewGoButton";
import UploadStageGoButton from "@/components/mainGoButton/UploadStageGoButton";

const Introduction = () => {
    return (
        <div className="page-container h-full w-full">
            <div className="content-wrap flex flex-col justify-center items-center">
                <MainGoButton />
                <ComponentViewGoButton/>
                <UploadStageGoButton/>
            </div>
        </div>

    )
}


export default Introduction;