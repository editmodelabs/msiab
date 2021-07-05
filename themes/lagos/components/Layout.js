import Head from "next/head";
import Styles from "./Styles";
import { useGetChunk } from "editmode-react";
import Footer from "../sections/Footer";
import TopNav from "../sections/TopNav";
import { useEffect } from "react";
import handleNav from "../utils/handleNav";
import { useRouter } from "next/dist/client/router";

function Layout(props) {
  const router = useRouter();
  useEffect(() => {
    handleNav();
  }, [router.pathname]);
  const defaultMetaTitle = `${useGetChunk("company_name")} -  ${useGetChunk(
    "company_tagline"
  )}`;

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{defaultMetaTitle}</title>
      </Head>
      <Styles />
      {/* <TopNav /> */}
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
