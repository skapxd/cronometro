import '../styles/normalice.scss'
import type { AppProps } from 'next/app'
import Header from '../components/lv01/Header/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header/>
  <Component {...pageProps} />
    </div>
  )
}

export default MyApp
