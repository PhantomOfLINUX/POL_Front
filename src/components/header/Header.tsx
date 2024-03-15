import HeaderBtn from "./HeaderBtn";
import HeaderLogoutBtn from "./HeaderLogoutBtn";
import HeaderMyPageBtn from "./HeaderMyPageBtn";

import { cookies } from 'next/headers'

const Header = () => {
    const cookiesStore = cookies();
    const POL_ACCESS_TOKEN = cookiesStore.get("POL_ACCESS_TOKEN")
    return (
        <header className="flex w-full px-40 min-h-28 justify-between items-center">
            <HeaderBtn href="/" value="Phantom of  Linux" className="text-thema-color font-[1000] text-4xl"/>
            <nav className="flex">
                {POL_ACCESS_TOKEN === undefined ?
                    <>
                        <HeaderBtn href="/login" value="로그인" className="headerBtn"/>
                        <HeaderBtn href="/signup" value="회원가입" className="headerBtn"/>
                    </>
                    : <>
                        <HeaderLogoutBtn accessToken={POL_ACCESS_TOKEN.value} />
                        <HeaderMyPageBtn accessToken={POL_ACCESS_TOKEN.value} />
                    </>}
            </nav>
        </header>
    )
}


export default Header;