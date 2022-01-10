import type { AppProps } from "next/app";

import Header from "../components/lv02/Header/Header";
import SideBar from "../components/lv02/SideBar/SideBar";

import Style from "./_app.module.scss";
import "../styles/normalice.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={Style.MyApp}>
      <Header />
      <div className={Style.MyApp_content}>
        <SideBar className={`${Style.MyApp_content_sidebar}`} />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
