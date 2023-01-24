import '@/styles/resets.css'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'

//this is dev branch!

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
