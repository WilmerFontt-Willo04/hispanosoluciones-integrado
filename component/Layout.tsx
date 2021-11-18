import React, { useEffect } from "react";

import Aside from "./Aside";
import ToolBar from "./ToolBar";

const Layout = ({ children }) => {
  useEffect(() => {
    const body = document.body;
    body.setAttribute("id", "kt_body");
    body.classList.add(
      "header-fixed",
      "header-tablet-and-mobile-fixed",
      "toolbar-enabled",
      // "toolbar-fixed",
      "aside-enabled",
      "aside-fixed"
    );
  }, []);
  return (
    <>
      <Aside />

      {/* Contenido */}
      {/* <div className="my-5">{children}</div> */}
      <ToolBar />
    </>
  );
};

export default Layout;
