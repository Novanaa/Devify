import React from "react";
import Layout from "../layouts/Layout";
import Hero from "./sections/Home/Hero/Hero";
import UseCases from "./sections/Home/UseCases/UseCases";
import Resources from "./sections/Home/Resources/Resources";
import Reason from "./sections/Home/Reason/Reason";
import Main from "./sections/Home/Introduction/Main";
import GettingStarted from "./sections/Home/GettingStarted/GettingStarted";
import LoremIpsum from "./sections/Home/LoremIpsum/LoremIpsum";
import Routes from "./sections/Home/Routes/Routes";
import Features from "./sections/Home/Features/Features";
import Feedback from "./sections/Home/Feedback/Feedback";
import metadata from "@/metadata";

function Home() {
  return (
    <Layout title={metadata.title} description={metadata.description}>
      <Hero />
      <Reason />
      <Main />
      <Resources />
      <UseCases />
      <LoremIpsum />
      <Features />
      <Routes />
      <Feedback />
      <GettingStarted />
    </Layout>
  );
}

export default Home;
