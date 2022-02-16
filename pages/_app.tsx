import Head from "next/head";
import Script from "next/script";
import initAuth from "../lib/initAuth";
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from "next-firebase-auth";

initAuth();

function App({ Component, pageProps, err }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </Head>
      <Component {...pageProps} err={err} />
    </>
  );
}

export default withAuthUser()(App as any);
