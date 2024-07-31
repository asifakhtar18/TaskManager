"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import ReduxProvider from "../store/reduxProvider";
import "./globals.css";

const Home: React.FC<> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default Home;
