import Head from 'next/head'
import Styles from "./Styles"

function Layout(props) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>My page title</title>
      </Head>
      <Styles />
      {props.children}
    </div>
  )
}

export default Layout
