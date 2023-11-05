import React from "react";
import index from "./styles/GettingStarted.module.css";
import { PrimaryBtn, SecondaryBtn } from "@/styles/global";
import Link from "next/link";

function GettingStarted() {
  return (
    <>
      <div className={index.container}>
        <div className={index.wrapper}>
          <div className={index.contentWrapper}>
            <h3 className={index.getStarted}>GETTING STARTED</h3>
            <h1 className={index.contentTitle}>
              Still using Lorem Ipsum data?
            </h1>
            <p className={index.contentDescription}>
              It&apos;s time to break free from this outdated practice and
              infuse your designs with authenticity and relevance. In this era
              of dynamic and user-centric design, using real and meaningful
              content not only elevates the visual appeal but also provides a
              true representation of how your design will interact with the
              final copy.
            </p>
            <div className={index.ctaWrapper}>
              <Link href="/">
                <PrimaryBtn>Get Started</PrimaryBtn>
              </Link>
              <Link href="/">
                <SecondaryBtn>Quick Start</SecondaryBtn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GettingStarted;
