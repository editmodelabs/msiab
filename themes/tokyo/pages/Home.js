import { Editmode } from 'editmode-react';
import Head from 'next/head'
import {
  Header,
  Feature,
  HowTo,
  Testimonial,
  Faqs,
  Footer
} from '../sections'




export default function Home() {
  return (
    <Editmode projectId="prj_U1MsRwlHHixZ">
      <main className="antialiased bg-body text-body font-body">
        <Head>
          <title>Tokyo Theme x Editmode</title>
          <meta name="description" content="Editmode Tokyo Theme Template" />
        </Head>

        <Header />

        <HowTo />

        <Feature />

        <Testimonial />

        <Faqs />

        <Footer />
      </main>
    </Editmode>
  )
}
