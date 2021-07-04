import Hero from "../sections/Hero";
import Features from "../sections/Features";
import HowItWorks from "../sections/HowItWorks";
import Faq from "../sections/FAQ";
import UserBrands from "../sections/UserBrands";
import Testimonials from "../sections/Testimonials";
import TopNav from "../sections/TopNav";
import EmailCapture from "../sections/EmailCapture";
import { Editmode } from "editmode-react";
import Layout from "../components/Layout";
import handleNav from "../utils/handleNav";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <TopNav />
      <Hero />
      <HowItWorks />
      <Features />
      <Faq />
      <UserBrands />
      <Testimonials />
      <EmailCapture />
    </>
  );
}

Home.getLayout = (page) => (
  <Editmode projectId={process.env.NEXT_PUBLIC_PROJECT_ID}>
    <Layout>{page}</Layout>
  </Editmode>
);
