import Contact from "../sections/Contact"
import Layout from "../components/Layout";

export default function ContactUs() {
  return (
    <Contact />
  );
}

ContactUs.getLayout = (page) => <Layout pageName="ContactUs">
  {page}</Layout>;
