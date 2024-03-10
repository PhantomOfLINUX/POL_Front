import React from "react";
import ChangePasswordForm from "@/components/changepassword/ChangePasswordForm";
import ChangePasswordDescription from "@/components/description/ChangePasswordDescription"


const ChangePassword = () => {

    return (
        <div>
            <ChangePasswordDescription />
            <ChangePasswordForm />
        </div>
    )
}


export default ChangePassword;