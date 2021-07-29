import "../styles/globals.css";
import "../styles/custom.css";
import { Editmode, useGetChunk } from "editmode-react";

function MyApp({ Component, pageProps, chunks }) {
  const getLayout = Component.getLayout || ((page) => page);
  console.log(chunks);
  const { data, ...rest } = pageProps;
  return getLayout(<Component {...pageProps} />, data);
}

export default MyApp;
