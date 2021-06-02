import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Team from "../sections/Team";
import Faq from "../sections/FAQ";
import UserBrands from "../sections/UserBrands";
import Testimonials from "../sections/Testimonials";
import Footer from "../sections/Footer";
import {
  Editmode,
  ChunkFieldValue,
  useCollectionChunks,
  CustomChunkCollection,
  CollectionItemWrapper,
} from "editmode-react";

export default function Home() {
  const cid = "col_Vy60deRW7cPy";
  const chunks = useCollectionChunks(cid);
  return (
    <>
      <div>
        <Editmode projectId="prj_UNCcdY6M5Teg">
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
