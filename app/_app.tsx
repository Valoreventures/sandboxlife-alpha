// setup your wrapper in the _app file (e.g: pages/_app.js)
import React from 'react';
import { Chakra } from "../Chakra";
import { ThemeProvider, createTheme } from '@mui/material';
import { AuthProvider } from '../AuthProvider';

export default function App({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <ThemeProvider theme={createTheme()}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </Chakra>
  );
}

export { getServerSideProps } from "../Chakra";
