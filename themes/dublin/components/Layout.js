import Head from "next/head";
import Styles from "./Styles";
import TopNavbar from "../sections/TopNavbar";
import Footer from "../sections/Footer";
import { useGetChunk, Editmode } from "editmode-react";
import handleNav from "../utils/handleNav";
import { useEffect } from "react";

function Layout({ children }) {
  const defaultMetaTitle = `${useGetChunk("company_name")} -  ${useGetChunk(
    "company_tagline"
  )}`;
  const font_composition = useGetChunk("google_font_family_composition");
  useEffect(() => {
    handleNav();
  }, []);
  const { chunks } = children.props;

  return (
    <Editmode
      projectId={process.env.NEXT_PUBLIC_PROJECT_ID}
      defaultChunks={chunks}
      next={true}
    >
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
      {children}
      <Footer />
    </Editmode>
  );
}

export default Layout;
