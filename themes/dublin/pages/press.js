import PressReleases from "../sections/PressReleases";
import Layout from "../components/Layout";
import { getStaticProps } from "../utils/getStaticProps";

export default function Press() {
  return <PressReleases />;
}

Press.getLayout = (page) => <Layout pageName="Press">{page}</Layout>;

export { getStaticProps };
