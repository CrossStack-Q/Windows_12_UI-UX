import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import {AppWrapper} from "../context/state"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <AppWrapper>
    <SessionProvider session={session}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
    </AppWrapper>
  );
}

export default MyApp;
