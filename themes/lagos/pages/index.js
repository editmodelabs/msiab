import Hero from "../sections/Hero";
import Features from "../sections/Features";
import HowItWorks from "../sections/HowItWorks";
import Faq from "../sections/FAQ";
import UserBrands from "../sections/UserBrands";
import Testimonials from "../sections/Testimonials";
import EmailCapture from "../sections/EmailCapture";
import Layout from "../components/Layout";
import { getStaticProps } from "../utils/getStaticProps";

export default function Home() {
  return (
    <>
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

Home.getLayout = (page) => {
  return <Layout pageName="Home">{page}</Layout>;
};

export { getStaticProps };
