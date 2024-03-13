import React from "react";
import FindPasswordForm from "@/components/findpassword/FindPasswordForm";
import ResetPasswordDescription from "@/components/description/ResetPasswordDescription"


const FindPassword = () => {

    return (
        <div>
            <ResetPasswordDescription />
            <FindPasswordForm />
        </div>
    )
}


export default FindPassword;