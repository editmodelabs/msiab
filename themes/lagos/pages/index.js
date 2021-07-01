import Layout from "../components/Layout";
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
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
      </Head>
      <Hero />
      <HowItWorks />
      <Features />
      <Faq />
      <UserBrands />
      <Testimonials />
      <Footer />
    </div>
  );
}
