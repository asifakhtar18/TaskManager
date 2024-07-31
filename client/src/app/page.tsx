"use client";

import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import ReduxProvider from "../store/reduxProvider";
import { AppInitialProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";
import "./globals.css";

const Home: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default Home;
