import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Team from "../sections/Team";
import Faq from "../sections/FAQ";
import UserBrands from "../sections/UserBrands";
import Testimonials from "../sections/Testimonials";
import Footer from "../sections/Footer";
import { Editmode } from "editmode-react";
import { useEffect } from "react";
import handleNav from "../utils/handleNav";
import Head from 'next/head'
import { useGetChunk } from "editmode-react";

export default function Home() {

  const primaryColor = useGetChunk("primary_color")
  useEffect(() => {
    handleNav();
  }, []);
  return (
    <>
      <div>
        <Editmode projectId={process.env.NEXT_PUBLIC_PROJECT_ID}>

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
          <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Hero />
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
