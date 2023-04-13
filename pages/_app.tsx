import { wrapper } from 'store';
import '@/styles/resets.scss'
import axios from 'axios'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';

const defaultTheme = {

}

axios.defaults.withCredentials = true;

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default wrapper.withRedux(App);