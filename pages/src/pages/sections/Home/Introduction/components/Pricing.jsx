import React from "react";
import index from "../styles/Pricing.module.css";
import Code from "@/pages/sections/Home/Introduction/components/assests/Code/Code";

function Pricing() {
  return (
    <>
      <div className={index.componentWrapper}>
        <div className={index.contentComponentWrapper}>
          <Code />
        </div>
        <div className={index.headComponentWrapper}>
          <h3 className={index.componentTitle}>Worried about the cost?</h3>
          <p className={index.componentDescription}>
            Worried about the cost of testing and development? Our innovative
            Free Fake API service allows you to simulate data interactions
            effortlessly, eliminating concerns about real-time expenses.
          </p>
          <button className={index.secBtn} title="Pricing??">
            Pricing?
          </button>
        </div>
      </div>
    </>
  );
}

export default Pricing;
