import Head from 'next/head'
import { useGetChunk } from "editmode-react";

function Layout(props) {
  const primaryColor = useGetChunk("primary_color")
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet" />
      </Head>
      {props.children}
      <style jsx global>{`
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
      `}</style>
    </div>
  )
}

export default Layout