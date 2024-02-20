// setup your wrapper in the _app file (e.g: pages/_app.js)
import React from 'react';
import { Chakra } from "../Chakra";

export default function App({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}

export { getServerSideProps } from "../Chakra";
