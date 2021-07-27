import Register from "../sections/Register";
import Layout from "../components/Layout";

export default function SignUp() {
  return (
    <Register />
  );
}

SignUp.getLayout = (page) => <Layout pageName="SignUp">
  {page}</Layout>;