import ReactDOM from 'react-dom';
import { Provider } from 'urql';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../styles/Theme';
import client from '../client';
import { ReactElement } from 'react';
import { __IS_SERVER__, __PROD__ } from '../constants';
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

/**
 * The application and any high-level wrappers needed.
 */
interface Props {
  Component: () => JSX.Element;
  pageProps: Record<string, unknown>;
}

export default function App({ Component, pageProps }: Props): ReactElement {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

/**
 * Accessibility tool - outputs any WCAG concerns on the page to the console.
 * Only run during dev.
 * @see https://github.com/dequelabs/react-axe
 */
if (!__PROD__ && !__IS_SERVER__)
  import(`@axe-core/react`).then(axe => axe.default(React, ReactDOM, 1000));
