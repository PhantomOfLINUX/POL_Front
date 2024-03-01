'use client'
import Link from "next/link"
import {loginLocally} from "@/utils/logoutUtils/LogoutUtils"
import useAuthStore from "@/store/authStore"

const HeaderLogoutBtn = () => {
    const {userToken,setToken} = useAuthStore()
    return (
        <button onClick={()=>{loginLocally(userToken,setToken)}} type="button" className="headerBtn">
            <Link href="/">로그아웃</Link>
        </button>

    )
}

export default HeaderLogoutBtn