import Hero from "../sections/Hero";
// import Features from "../sections/Features";
// import HowItWorks from "../sections/HowItWorks";
// import Faq from "../sections/FAQ";
// import UserBrands from "../sections/UserBrands";
// import Testimonials from "../sections/Testimonials";
// import EmailCapture from "../sections/EmailCapture";
import Layout from "../components/Layout";
import { Editmode, useGetChunk } from "editmode-react";
import { data } from "autoprefixer";

export default function Home({ chunks }) {
  return (
    <>
      {/* <div>{props.chunks[4].content}</div> */}
      <Hero />
      {/* <HowItWorks />
        <Features />
        <Faq />
        <UserBrands />
        <Testimonials />
        <EmailCapture /> */}
    </>
  );
}

Home.getLayout = (page) => {
  console.log(page.props.chunks);
  const chunks = page.props.chunks;
  return (
    <Editmode projectId="prj_gaf3K12dTGwe" defaultChunks={chunks}>
      <Layout {...data} pageName="Home">
        {page}
      </Layout>
    </Editmode>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.editmode.com/chunks/?project_id=prj_gaf3K12dTGwe"
  );
  const { chunks } = await res.json();

  return {
    props: {
      chunks,
    },
  };
};
