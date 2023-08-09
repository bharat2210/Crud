import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import Layout from "../Components/Layout";
import Permisions from "../Components/Permisions";
import AOS from "aos";
import ToastContainerWrapper from "../Components/ToastContainerWrapper";


// Initialize AOS on client-side only
if (typeof window !== "undefined") {
  AOS.init({ duration: 1000 });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Permisions>
          <ToastContainerWrapper />
          <Component {...pageProps} />
        </Permisions>
      </Layout>
    </Provider>
  );
}

export default MyApp;
