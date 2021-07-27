import SignIn from "../../sections/SignIn";
import Layout from "../../components/Layout";

export default function Login() {
  return (
    <SignIn />
  );
}

Login.getLayout = (page) => <Layout pageName="Login">
  {page}</Layout>;