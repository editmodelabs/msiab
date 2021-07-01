import Head from "next/head";
import { Editmode, useGetChunk } from "editmode-react";
import Styles from "./Styles";

export default function Layout({ children }) {
  console.log(useGetChunk("primary_color"));
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="font"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&amp;display=swap"
          rel="stylesheet"
        />
      </Head>
      <Styles />
      {children}
    </>
  );
}
