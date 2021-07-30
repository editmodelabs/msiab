import Styles from "./Styles";
import TopNav from "../sections/TopNav";
import Footer from "../sections/Footer";
import { Editmode } from "editmode-react";
import handleNav from "../utils/handleNav";
import { useEffect } from "react";
import CustomHead from "./CustomHead";

function Layout({ chunks, children }) {
  useEffect(() => {
    handleNav();
  }, []);
  console.log(chunks);

  return (
    <>
      <Editmode projectId="prj_gaf3K12dTGwe" defaultChunks={chunks}>
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
