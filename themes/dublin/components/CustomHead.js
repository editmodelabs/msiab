import Head from "next/head";
import { useGetChunk } from "editmode-react";

function CustomHead() {
  const defaultMetaTitle = `${useGetChunk("company_name")} -  ${useGetChunk(
    "company_tagline"
  )}`;
  const font_composition = useGetChunk("google_font_family_composition");

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{defaultMetaTitle}</title>
        <link
          href={`https://fonts.googleapis.com/css2?family=${font_composition}&display=swap`}
          rel="stylesheet"
        />
      </Head>
    </>
  );
}

export default CustomHead;
