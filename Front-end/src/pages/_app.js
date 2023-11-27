import Root from "@/components/atoms/Root";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <Root>
        {getLayout(<Component {...pageProps} />)}
        <Toaster />
      </Root>
    </Provider>
  );
}
