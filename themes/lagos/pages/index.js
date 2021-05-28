import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Team from "../sections/Team";
import Faq from "../sections/FAQ";
import UserBrands from "../sections/UserBrands";
import Testimonials from "../sections/Testimonials";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Team />
      <Faq />
      <UserBrands />
      <Testimonials />
      <Footer />
    </div>
  );
}
