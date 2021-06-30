import Head from 'next/head'
import { Editmode, useGetChunk } from "editmode-react";

export default function Layout({ children }) {

  // const primaryColor = useGetChunk("primary_color")

  const primaryColor = "green"

  return (
    <Editmode projectId={process.env.NEXT_PUBLIC_PROJECT_ID}> 
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet" />
        <style global jsx>{`
          .text-primary {
            color: ${primaryColor};
          }
          .bg-primary {
            background-color: ${primaryColor};
          }
          .bg-primary-100 {
            background-color: ${primaryColor}10;
          }
          .border-primary {
            border-color: ${primaryColor};
          }
        `}
        </style>
      </Head>
      {children}
    </Editmode>
  )
}