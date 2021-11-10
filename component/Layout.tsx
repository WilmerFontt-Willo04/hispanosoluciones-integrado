import Aside from "./Aside";
import Footer from "./Footer";
import ToolBar from "./ToolBar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="row d-flex mb-5">
        <div className="col-4 fixed-top">
          <Aside />
        </div>
        <div className="col-8 m-auto">
          <ToolBar />
          {children}
          <div className="m-auto mb-3">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
