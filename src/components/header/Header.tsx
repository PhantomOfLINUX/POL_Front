import HeaderBtn from "./HeaderBtn";
import HeaderLogoutBtn from "./HeaderLogoutBtn";
import HeaderMyPageBtn from "./HeaderMyPageBtn";

import Image from 'next/image'

import { cookies } from 'next/headers'

const Header = () => {
    const cookiesStore = cookies();
    const POL_ACCESS_TOKEN = cookiesStore.get("POL_ACCESS_TOKEN")
    return (
        <header className="flex w-full px-40 min-h-28 justify-between items-center">
            <HeaderBtn href="/" className="text-thema-color font-[1000] text-4xl" >
                <Image 
                    src={"./headerHomeSVG/headerHome.svg"} 
                    alt="down"
                    width={30}
                    height={30}
                    style={{ width: 'auto', height: 'auto' }}
                />
            </HeaderBtn>
            <nav className="flex">
                {POL_ACCESS_TOKEN === undefined ?
                    <>
                        <HeaderBtn href="/login" className="headerBtn" >로그인</HeaderBtn>
                        <HeaderBtn href="/signup" className="headerBtn" >회원가입</HeaderBtn>
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