'use client'
import { useState } from "react";

import LoginInput from "./LoginInput";
import { signInLocally } from "@/utils/loginUtils/LoginUtil";

const LoginForm = () => {
    const [id,setId] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    return (
        <form onSubmit={e=>signInLocally(e,id,password)}>
            <LoginInput label="ID" type="text" placeholder="ID" onChange={setId}/>
            <LoginInput label="password" type="password" placeholder="****"  onChange={setPassword}/>
            <button className="loginSignUpBtn">로그인</button>
        </form>
    )
}


export default LoginForm;