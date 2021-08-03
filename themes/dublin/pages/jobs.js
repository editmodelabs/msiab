import Layout from "../components/Layout";
import JobPostings from "../sections/JobPostings";
import { getStaticProps } from "../utils/getStaticProps";

export default function Jobs() {
  return <JobPostings />;
}

Jobs.getLayout = (page) => <Layout pageName="Jobs">{page}</Layout>;

export { getStaticProps };
