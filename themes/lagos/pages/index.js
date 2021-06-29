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

export default function Home() {
  useEffect(() => {
    handleNav();
  }, []);
  return (
    <>
      <div>
        <Editmode projectId={process.env.NEXT_PUBLIC_PROJECT_ID}>
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
