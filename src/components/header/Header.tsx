"use client"
import HeaderLoginBtn from "./HeaderLoginBtn";
import HeaderSignUpBtn from "./HeaderSignUpBtn"
import HeaderHomeBtn from "./HeaderHomeBtn";
import HeaderLogoutBtn from "./HeaderLogoutBtn";
import useAuthStore from "@/store/authStore"

const Header = () => {
    const {userToken} = useAuthStore();
    return (
        <header className="flex w-full px-40 min-h-28 justify-between items-center">
            <HeaderHomeBtn />
            <nav className="flex">
                {userToken===null?
                <>
                <HeaderLoginBtn />
                <HeaderSignUpBtn />
                </>
                :<HeaderLogoutBtn/>}
            </nav>
        </header>
    )
}


export default Header;