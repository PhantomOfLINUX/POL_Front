import React from "react";

import LoginForm from "@/components/login/LoginForm";
import LoginSignupDescription from "@/components/description/LoginSignupDescription"


const login = () => {

    return (
        <div>
            <LoginSignupDescription />
            <LoginForm />
        </div>
    )
}


export default login;