import type { AppProps } from 'next/app'
import HeaderLayout from "../components/layout/HeaderLayout"


export default function MyApp({ Component, pageProps }: AppProps) {
  return(
    <HeaderLayout> 
      <Component {...pageProps} />
    </HeaderLayout>
  )
}