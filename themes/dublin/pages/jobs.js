import Layout from "../components/Layout";
import JobPostings from "../sections/JobPostings"

export default function Jobs() {
  return (
    <JobPostings />
  );
}

Jobs.getLayout = (page) => <Layout pageName="Jobs">
  {page}</Layout>;
