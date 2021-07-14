import TopNavbar from "../components/TopNavbar";
import Hero from "../sections/Hero";
import HowItWorks from "../sections/HowItWorks";
import Features from "../sections/Features";
import Faq from "../sections/FAQ";
import Testimonials from "../sections/Testimonials";
import UserBrands from "../sections/UserBrands";
import Footer from "../sections/Footer";
import { useEffect } from "react";
import handleNav from "../utils/handleNav";
import { Editmode } from 'editmode-react'
import Layout from '../components/Layout'


export default function Home() {
  useEffect(() => {
    handleNav();
  }, []);
  return (
    <div>
      <TopNavbar/>
      <Hero />
      <HowItWorks />
      <Features />
      <Faq />
      <Testimonials />
      <UserBrands />
      <Footer />
    </div>
  );
}

Home.getLayout = (page) => (
  <Editmode projectId={process.env.NEXT_PUBLIC_PROJECT_ID}>
    <Layout>{page}</Layout>
  </Editmode>
);