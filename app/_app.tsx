// setup your wrapper in the _app file (e.g: pages/_app.js)
import React from 'react';
import { Chakra } from "../Chakra";
import { ThemeProvider, createTheme } from '@mui/material';

export default function App({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <ThemeProvider theme={createTheme()}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Chakra>
  );
}

export { getServerSideProps } from "../Chakra";
