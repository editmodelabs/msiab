import Register from "../sections/Register";
import Layout from "../components/Layout";
import { getStaticProps } from "../utils/getStaticProps";

export default function SignUp() {
  return <Register />;
}

SignUp.getLayout = (page) => <Layout pageName="SignUp">{page}</Layout>;

export { getStaticProps };
