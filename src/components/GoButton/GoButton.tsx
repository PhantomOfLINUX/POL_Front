import React from "react";
import Link from "next/link"


const GoButton = () => {
    return (
        <button>
            <Link href={"/problem"}>터미널 구경하기</Link>
        </button>
    )
}

export default GoButton