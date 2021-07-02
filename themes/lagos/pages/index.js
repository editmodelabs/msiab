import Hero from "../sections/Hero";
import Features from "../sections/Features";
import HowItWorks from "../sections/HowItWorks";
import Team from "../sections/Team";
import Faq from "../sections/FAQ";
import UserBrands from "../sections/UserBrands";
import Testimonials from "../sections/Testimonials";
import TopNav from "../sections/TopNav";
import Footer from "../sections/Footer";
import EmailCapture from "../sections/EmailCapture";
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
      </Head>
      <TopNav />
      <Hero />
      <HowItWorks />
      <Features />
      <Faq />
      <UserBrands />
      <Testimonials />
      <EmailCapture />
      <Footer />
    </div>
  );
}
