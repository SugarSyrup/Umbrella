// import wrapper from '@/store/configureStore';
import React from 'react';
import type { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import {RecoilRoot} from 'recoil';

// import { Provider } from 'react-redux';
// import { store, persistor } from "../store/tmp/store";
// import { PersistGate } from "redux-persist/integration/react";

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
  const [hydrated, setHydrated] = React.useState(false);
    React.useEffect(() => {
        setHydrated(true);
    }, []);
    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
    
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Provider store={store}> 
        <PersistGate persistor={persistor}> */}
        <RecoilRoot>
          <GlobalStyle />
          <Component {...pageProps} />
        </RecoilRoot>
        {/* </PersistGate>
       </Provider> */}
    </ThemeProvider>  
  )
}

export default App;