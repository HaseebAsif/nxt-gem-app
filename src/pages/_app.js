//Component
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Loader from "../components/loader";

//Styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsLoading(true), 3000);
  });
  return (
    <>
      {!isLoading ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default MyApp;
