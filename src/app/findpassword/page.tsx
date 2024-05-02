import React from "react";
import FindPasswordForm from "@/components/findpassword/FindPasswordForm";
import ResetPasswordDescription from "@/components/description/ResetPasswordDescription"
import Spacing64 from "@/components/spacing/Spacing64";


const FindPassword = () => {

    return (
        <div>
            <Spacing64/>
            <ResetPasswordDescription />
            <FindPasswordForm />
        </div>
    )
}


export default FindPassword;