"use client";

import "./globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import ReduxProvider from "../store/reduxProvider";

function Home({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </ThemeProvider>
  );
}

export default Home;
