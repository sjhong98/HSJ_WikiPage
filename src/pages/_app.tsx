import { RecoilRoot } from 'recoil'
import '@/styles/globals.css'
import '../../public/fonts/fontStyle.css'
import type { AppProps } from 'next/app'
import Title from './components/title'
import Header from './components/header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Title />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
