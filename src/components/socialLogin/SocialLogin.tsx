import React from "react";

import Google from "./socialSVG/google.svg"
import KaKao from "./socialSVG/kakao.svg"
import Naver from "./socialSVG/naver.svg"
import Github from "./socialSVG/github.svg"


const SocialLogin = () => {
    return (
        <div className="flex">
            <Google/>
            <KaKao/>
            <Naver/>
            <Github/>
        </div>
    )
}


export default SocialLogin