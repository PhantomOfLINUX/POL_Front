"use cilent"

import React from "react";
import Image from 'next/image'

import {getSocialLoginUrl} from "@/utils/socialLogin/SocialLoginUtils"

type SocialLoginSVGType = {
    name:string
}


const SocialLoginSVG:React.FC<SocialLoginSVGType> = ({name}) => {
    const ImageUrl = `./socialSVG/${name}.svg`
    return (
        <button onClick={(e)=>{
            e.preventDefault() 
            getSocialLoginUrl(name)
        }}>
            <Image 
                src={ImageUrl}
                alt={`${name}`}
                width={50}
                height={50}
                style={{ width: 'auto', height: 'auto' }}
            />
        </button>
    )
}


export default SocialLoginSVG