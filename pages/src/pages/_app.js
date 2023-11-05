import "@/styles/globals.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { Provider } from "react-redux";
import store from "@/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SkeletonTheme baseColor="#1b1b1b" highlightColor="#3b3b3b">
        <Component {...pageProps} />
      </SkeletonTheme>
    </Provider>
  );
}
