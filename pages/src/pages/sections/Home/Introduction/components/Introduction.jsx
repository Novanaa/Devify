import React from "react";
import index from "../styles/Introduction.module.css";
import { PrimaryBtn, SecondaryBtn } from "@/styles/global";
import Terminal from "@/pages/sections/Home/Introduction/components/assests/Terminal/Terminal";
import Link from "next/link";

function Introduction() {
  return (
    <>
      <div className={index.componentWrapper}>
        <div className={index.headComponentWrapper}>
          <h3 className={index.componentTitle}>Accelerate Web Development</h3>
          <p className={index.componentDescription}>
            Streamlining the development process is essential for efficient and
            successful project execution. By simplifying tasks, minimizing
            complexities, and providing intuitive tools, developers can navigate
            the development phase with greater ease.
          </p>
          <Link href="/docs/v1/quick-start">
            <PrimaryBtn className={index.ctaBtn}>Start Now</PrimaryBtn>
          </Link>
        </div>
        <div className={index.contentComponentWrapper}>
          <Terminal
            content={`curl "https://api-devify.my.id/v1/products"`}
            rotate="0.5"
          />
        </div>
      </div>
    </>
  );
}

export default Introduction;
