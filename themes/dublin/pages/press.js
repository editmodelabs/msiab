import PressReleases from "../sections/PressReleases";
import Layout from "../components/Layout";

export default function Press() {
  return (
    <PressReleases />
  );
}

Press.getLayout = (page) => <Layout pageName="Press">
  {page}</Layout>;