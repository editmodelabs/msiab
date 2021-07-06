import Head from "next/head";
import Styles from "./Styles";
import TopNav from "../sections/TopNav";
import Footer from "../sections/Footer";
import { useGetChunk, Editmode } from "editmode-react";
import handleNav from "../utils/handleNav";
import { useEffect } from "react";

function Layout(props) {
  const defaultMetaTitle = `${useGetChunk("company_name")} -  ${useGetChunk(
    "company_tagline"
  )}`;
  useEffect(() => {
    handleNav();
  }, []);

  return (
    <Editmode projectId={process.env.NEXT_PUBLIC_PROJECT_ID}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{defaultMetaTitle}</title>
      </Head>
      <Styles />
      <TopNav />
      {props.children}
      <Footer />
    </Editmode>
  );
}

export default Layout;
