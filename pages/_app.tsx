import type { AppProps } from "next/app";
import React from "react";
import { Provider } from "next-auth/client";
import "bootstrap/dist/css/bootstrap.min.css";
// Styles
import "../styles/Global.scss";
import "../styles/Navbar.scss";
import "../styles/Header.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
