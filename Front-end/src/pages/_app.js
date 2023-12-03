import Spinner from "@/components/atoms/Spinner";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
      <Toaster />
    </Provider>
  );
}
