import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

function Layout({ children, title, description, usage }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isDocs = usage == "docs" ? "none" : "block";
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    }
  }, []);
  const Headers = () => {
    return (
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href={`${
            isDarkMode ? `/images/icons/devify.png` : `/images/icons/devify.svg`
          }`}
        />
        <meta property="og:url" content="https://devify.my.id" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/images/icons/devify.svg" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://devify.my.id" />
        <meta property="twitter:url" content=" https://devify.my.id " />
        <meta name="twitter:site" content="@Devify" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://devify.my.id" />
        <meta name="author" content="Nova" />
        <meta
          name="keywords"
          content="Fake API, Development, Testing, The Intuitive Fake API for Your Apps, Mock API, Products API, JSON Data"
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/images/icons/devify.svg" />
      </Head>
    );
  };
  return (
    <>
      <Headers />
      <Navbar />
      <main>{children}</main>
      <div style={{ display: isDocs }}>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
