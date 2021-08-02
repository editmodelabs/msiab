import "../styles/globals.css";
import "../styles/custom.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const { data, ...rest } = pageProps;
  return getLayout(<Component {...pageProps} />, data);
}

export default MyApp;
