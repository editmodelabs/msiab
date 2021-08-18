import Hero from "../sections/Hero";
import HowItWorks from "../sections/HowItWorks";
import Features from "../sections/Features";
import Faq from "../sections/FAQ";
import Testimonials from "../sections/Testimonials";
import UserBrands from "../sections/UserBrands";
import Layout from "../components/Layout";
import { getStaticProps } from "../utils/getStaticProps";
export default function Home() {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <Features />
      <Faq />
      <Testimonials />
      <UserBrands />
    </div>
  );
}

Home.getLayout = (page) => <Layout>{page}</Layout>;

export { getStaticProps };
