import HeaderLoginBtn from "./HeaderLoginBtn";
import HeaderSignUpBtn from "./HeaderSignUpBtn"
import HeaderHomeBtn from "./HeaderHomeBtn";
import HeaderLogoutBtn from "./HeaderLogoutBtn";
import { cookies } from 'next/headers'

const Header = () => {
    const cookiesStore = cookies();
    const POL_ACCESS_TOKEN = cookiesStore.get("POL_ACCESS_TOKEN")
    return (
        <header className="flex w-full px-40 min-h-28 justify-between items-center">
            <HeaderHomeBtn />
            <nav className="flex">
                {POL_ACCESS_TOKEN===undefined?
                <>
                <HeaderLoginBtn />
                <HeaderSignUpBtn />
                </>
                :<HeaderLogoutBtn accessToken={POL_ACCESS_TOKEN.value}/>}
            </nav>
        </header>
    )
}


export default Header;