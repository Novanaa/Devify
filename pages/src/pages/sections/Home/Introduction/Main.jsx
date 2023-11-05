import React from "react";
import index from "./styles/index.module.css";
import Pricing from "./components/Pricing";
import Introduction from "./components/Introduction";

function Main() {
  return (
    <>
      <div className={index.container}>
        <div className={index.wrapper}>
          <div className={index.contentWrapper}>
            <Pricing />
            <Introduction />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
