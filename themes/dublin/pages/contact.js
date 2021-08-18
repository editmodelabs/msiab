import Contact from "../sections/Contact";
import Layout from "../components/Layout";
import { getStaticProps } from "../utils/getStaticProps";
export default function ContactUs() {
  return <Contact />;
}

ContactUs.getLayout = (page) => <Layout pageName="ContactUs">{page}</Layout>;

export { getStaticProps };
