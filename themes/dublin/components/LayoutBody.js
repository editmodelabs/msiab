import Styles from "./Styles";
import TopNav from "../sections/TopNavbar";
import Footer from "../sections/Footer";
import CustomHead from "./CustomHead";

export default function LayoutBody({ children }) {
  return (
    <>
      <CustomHead />
      <Styles />
      <TopNav />
      {children}
      <Footer />
    </>
  );
}
