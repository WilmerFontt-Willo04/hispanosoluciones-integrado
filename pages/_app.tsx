
import Home from ".";

import Layout from "../component/Layout";
import "../styles/globals.css";
import "../theme_html/theme/demo1/dist/assets/css/style.bundle";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Home {...pageProps} />
    </Layout>
  );
}

export default MyApp;
