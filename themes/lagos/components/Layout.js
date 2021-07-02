import Head from 'next/head'
import Styles from './Styles'
import { useGetChunk } from "editmode-react";

function Layout(props) {
  const defaultMetaTitle = `${useGetChunk('company_name')} -  ${useGetChunk('company_tagline')}`

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{defaultMetaTitle}</title>
      </Head>
      <Styles />
      {props.children}
    </div>
  )
}

export default Layout
