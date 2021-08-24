import { Editmode } from "editmode-react";
import handleNav from "../utils/handleNav";
import { useEffect, useState } from "react";
import LayoutBody from "./LayoutBody";
import StillCloning from "./StillCloning";
import { confirmSiteReadiness } from "../utils/confirmSiteReadiness";
import { useRouter } from "next/router";
import Router from "next/router";

function Layout({ children }) {
  const { chunks } = children.props;
  const { content_loaded } = children.props;
  useEffect(() => {
    handleNav();
    let interval;
    if (content_loaded === false) {
      interval = setInterval(async () => {
        const canRefresh = await confirmSiteReadiness();
        if (canRefresh) {
          Router.reload(window.location.pathname);
        }
      }, 75000);
    }
    return () => clearInterval(interval);
  }, []);
  let view;

  if (content_loaded === false) {
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
