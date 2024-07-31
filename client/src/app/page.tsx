"use client";

import React from "react";

import "./globals.css";

const Home = ({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<any>;
  pageProps: any;
}) => {
  return <Component {...pageProps} />;
};

export default Home;
