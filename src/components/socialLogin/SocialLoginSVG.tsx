"use cilent"

import React from "react";
import Image from 'next/image'


type SocialLoginSVGType = {
    name:string
}


const SocialLoginSVG:React.FC<SocialLoginSVGType> = ({name}) => {
    const ImageUrl = `./socialSVG/${name}.svg`
    return (
        <button onClick={(e)=>{
            e.preventDefault()  
        }}>
            <Image 
                src={ImageUrl}
                alt={`${name}`} // 이미지 설명
                width={50} // 이미지 너비
                height={50} // 이미지 높이
            />
        </button>
    )
}


export default SocialLoginSVG