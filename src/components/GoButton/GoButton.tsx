import React from "react";
import Link from "next/link"


const GoButton = () => {
    return (
        <button>
            <Link href={"/problem"}>GO</Link>
        </button>
    )
}

export default GoButton