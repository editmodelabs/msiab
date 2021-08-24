import { Editmode } from "editmode-react";
import handleNav from "../utils/handleNav";
import { useEffect, useState } from "react";
import LayoutBody from "./LayoutBody";
import StillCloning from "./StillCloning";
import { confirmSiteReadiness, reload } from "../utils/confirmSiteReadiness";

function Layout({ children }) {
  const { chunks } = children.props;
  const { content_loaded } = children.props;
  const [ready, setReady] = useState(false);
  useEffect(() => {
    handleNav();
    let interval;
    setReady(content_loaded);
    if (content_loaded === false) {
      interval = setInterval(async () => {
        const canRefresh = await confirmSiteReadiness();
        if (canRefresh) {
          reload();
        }
      }, 120000);
    }
    return () => clearInterval(interval);
  }, []);
  let view;

  if (content_loaded == false) {
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
