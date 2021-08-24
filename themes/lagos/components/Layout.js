import { Editmode } from "editmode-react";
import handleNav from "../utils/handleNav";
import { useEffect } from "react";
import LayoutBody from "./LayoutBody";
import StillCloning from "./StillCloning";

function Layout({ children }) {
  const { chunks } = children.props;
  const { ready } = children.props;
  useEffect(() => {
    handleNav();
    let interval;
    if (ready === false) {
      interval = setInterval(() => {
        window.location.replace(window.location.href);
      }, 210000);
    }
    return () => clearInterval(interval);
  }, []);
  let view;

  if (ready === false) {
    view = <StillCloning />;
  } else
    view = (
      <Editmode
        projectId={process.env.NEXT_PUBLIC_PROJECT_ID}
        defaultChunks={chunks}
        next={true}
      >
        <LayoutBody children={children} />{" "}
      </Editmode>
    );
  return <>{view}</>;
}

export default Layout;
