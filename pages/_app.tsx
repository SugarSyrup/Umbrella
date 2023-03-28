import { wrapper } from 'store';
import '@/styles/resets.scss'
import axios from 'axios'
import type { AppProps } from 'next/app'

axios.defaults.withCredentials = true;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(App);