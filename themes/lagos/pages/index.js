import Hero from "../sections/Hero";
import Features from "../sections/Features";
import HowItWorks from "../sections/HowItWorks";
import Faq from "../sections/FAQ";
import UserBrands from "../sections/UserBrands";
import Testimonials from "../sections/Testimonials";
import EmailCapture from "../sections/EmailCapture";
import { Editmode } from "editmode-react";
import Layout from "../components/Layout";
import TopNav from "../sections/TopNav";
import fetchPropChunks from "../utils/fetchPropChunks";

export default function Home({ data }) {
  const chunks = data.chunks;

  const items = chunks.map((chunk) => ({
    title: chunk.content[0].content,
    url: chunk.content[1].content,
  }));

  return (
    <>
      <TopNav items={items} />
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

export async function getServerSideProps(context) {
  const data = await fetchPropChunks();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
