import Styles from "./Styles";
import TopNav from "../sections/TopNav";
import Footer from "../sections/Footer";
import { Editmode } from "editmode-react";
import handleNav from "../utils/handleNav";
import { useEffect } from "react";
import CustomHead from "./CustomHead";

function Layout({ children }) {
  useEffect(() => {
    handleNav();
  }, []);
  const { chunks } = children.props;
  return (
    <>
      <Editmode
        projectId={process.env.NEXT_PUBLIC_PROJECT_ID}
        defaultChunks={chunks}
        next={true}
      >
        <CustomHead />
        <Styles />
        <TopNav />
        {children}
        <Footer />
      </Editmode>
    </>
  );
}

export default Layout;
