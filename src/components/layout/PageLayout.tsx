import Header from "../header/Header"
import Footer from "../footer/Footer"

const PageLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <>
            <Header />
            {children}
            <Footer/>
        </>
    )
}


export default PageLayout