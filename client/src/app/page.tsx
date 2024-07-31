import React from "react";

import "./globals.css";

type PageProps = {
  Component: React.ComponentType<any>;
  pageProps: any;
};

const Home: React.FC<PageProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default Home;
