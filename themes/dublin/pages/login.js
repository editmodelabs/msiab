import SignIn from "../sections/SignIn";
import Layout from "../components/Layout";
import { getStaticProps } from "../utils/getStaticProps";

export default function Login() {
  return <SignIn />;
}

Login.getLayout = (page) => <Layout pageName="Login">{page}</Layout>;

export { getStaticProps };
