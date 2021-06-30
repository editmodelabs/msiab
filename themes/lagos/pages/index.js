import Hero from "../sections/Hero";
import Features from "../sections/Features";
import HowItWorks from "../sections/HowItWorks";
import Team from "../sections/Team";
import Faq from "../sections/FAQ";
import UserBrands from "../sections/UserBrands";
import Testimonials from "../sections/Testimonials";
import Footer from "../sections/Footer";
import { Editmode } from "editmode-react";
import { useEffect } from "react";
import handleNav from "../utils/handleNav";
import Head from 'next/head'
import InlineStyles from "../styles/InlineStyles";

export default function Home() {
  useEffect(() => {
    handleNav();
  }, []);
  return (
    <>
      <div>
        <Editmode projectId={process.env.NEXT_PUBLIC_PROJECT_ID}>
          <InlineStyles />
          <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Hero />
          <HowItWorks />
          <Features />
          <Team />
          <Faq />
          <UserBrands />
          <Testimonials />
          <Footer />
        </Editmode>
      </div>
    </>
  );
}
