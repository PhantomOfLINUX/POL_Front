import HeaderBtn from "./HeaderBtn";
import HeaderLogoutBtn from "./HeaderLogoutBtn";
import HeaderMyPageBtn from "./HeaderMyPageBtn";
import HeaderProblemBtn from "./HeaderProblemBtn";
import HeaderMockTestBtn from "./HeaderMockTestBtn";
import HeaderAnalyzeBtn from "./HeaderAnalyzeBtn";

import Image from 'next/image'

import { cookies } from 'next/headers'
import HeaderSatisfactionBtn from "@/components/header/HeaderSatisfactionBtn";

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
                        <HeaderProblemBtn accessToken={POL_ACCESS_TOKEN.value} />
                        <HeaderMockTestBtn accessToken={POL_ACCESS_TOKEN.value} />
                        <HeaderAnalyzeBtn accessToken={POL_ACCESS_TOKEN.value} />
                        <HeaderSatisfactionBtn accessToken={POL_ACCESS_TOKEN.value} />
                        <HeaderLogoutBtn accessToken={POL_ACCESS_TOKEN.value} />
                        <HeaderMyPageBtn accessToken={POL_ACCESS_TOKEN.value} />
                    </>}
            </nav>
        </header>
    )
}


export default Header;