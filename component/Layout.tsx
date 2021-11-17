import React, { useEffect } from "react";

import Aside from "./Aside";
import Footer from "./Footer";
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
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Aside />
          </div>
          <div className="col-10">
            <div className="bg-white">
              <ToolBar />
            </div>
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
