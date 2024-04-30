import React from "react";
import Link from "next/link";

import MainGoButton from "@/components/mainGoButton/MainGoButton";
import Spacing64 from "@/components/spacing/Spacing64";

const Introduction = () => {
    return (
        <div className="page-container min-h-screen">
            <Spacing64/>
            <div className="content-wrap flex flex-row justify-center">
                <MainGoButton />
            </div>
        </div>

    )
}


export default Introduction;