import Head from "next/head";
import Styles from "./Styles";
import TopNavbar from "../sections/TopNavbar";
import Footer from "../sections/Footer";
import { useGetChunk, Editmode } from "editmode-react";
import handleNav from "../utils/handleNav";
import { useEffect } from "react";

function Layout(props) {
  const defaultMetaTitle = `${useGetChunk("company_name")} -  ${useGetChunk(
    "company_tagline"
  )}`;
  const font_composition = useGetChunk("google_font_family_composition");
  useEffect(() => {
    handleNav();
  }, []);

  return (
    <Editmode projectId={process.env.NEXT_PUBLIC_PROJECT_ID}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{defaultMetaTitle}</title>
        <link
          href={`https://fonts.googleapis.com/css2?family=${font_composition}&display=swap`}
          rel="stylesheet"
        />
      </Head>
      <Styles />
      <TopNavbar />
      {props.children}
      <Footer />
    </Editmode>
  );
}

export default Layout;
