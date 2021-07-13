import Head from 'next/head'
import { useGetChunk } from "editmode-react";

function Layout(props) {
  const primaryColor = useGetChunk("primary_color")
  const font = useGetChunk('google_font_family')
  const defaultMetaTitle = `${useGetChunk('company_name')} -  ${useGetChunk('company_tagline')}`

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{defaultMetaTitle}</title>
      </Head>
      {props.children}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=${font}&display=swap');
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