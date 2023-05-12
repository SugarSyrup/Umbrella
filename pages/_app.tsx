import axios from 'axios'
import type { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Provider } from 'react-redux';
import { store, persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

const defaultTheme = {
  primaryColor: "#372838"
}

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading="null" persistor={persistor}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}