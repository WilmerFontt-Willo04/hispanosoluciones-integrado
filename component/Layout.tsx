import Aside from "./Aside";
import Footer from "./Footer";
import ToolBar from "./ToolBar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-2">
            <Aside />
          </div>
          <div className="col-9 container">
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
