import "../styles/globals.css";
import "../styles/custom.css";
import App, { Container } from 'next/app'
import Layout from '../components/Layout'
import { Editmode, useGetChunk } from "editmode-react";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Editmode projectId={process.env.NEXT_PUBLIC_PROJECT_ID}> 
        <Container>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </Editmode>
    )
  }
}

export default MyApp