import '@/styles/resets.css'
import axios from 'axios'
import type { AppProps } from 'next/app'

axios.defaults.withCredentials = true;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
