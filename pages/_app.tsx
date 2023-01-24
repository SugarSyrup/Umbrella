import '@/styles/resets.css'
import Layout from '../components/Layout'
import axios from 'axios'
import type { AppProps } from 'next/app'

axios.defaults.withCredentials = true;
//this is dev branch!

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
