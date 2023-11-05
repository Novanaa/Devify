import React from "react";
import index from "./styles/Hero.module.css";
import { Typewriter } from "react-simple-typewriter";
import { PrimaryBtn, SecondaryBtn } from "@/styles/global";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  const apiContent = ["products", "users", "books", "auth", "carts"];
  const endpoint = "https://api-devify.my.id/v1/";
  const notify = () =>
    toast.success("Copied to Clipboard✨", {
      style: { backgroundColor: "#3d3d3dcb", color: "#ead4ed" },
    });
  const handleCopy = () => {
    notify();
    navigator.clipboard.writeText(endpoint + apiContent[0]);
  };
  return (
    <>
      <Toaster />
      <section className={index.heroSection}>
        <div className={index.heroSectionContainer}>
          <div className={index.heroSectionWrapper}>
            <div className={index.heroBackgroundWrapper}>
              <Image
                src="/images/background/Ornament 66.svg"
                alt="arrowBackground"
                width="80"
                height="80"
                className={index.heroAbstractBackgroundOne}
              />
            </div>
            <div className={index.heroHeadersWrapper}>
              <span className={index.heroHeaderIndicator}>NEW</span>
              <h3 className={index.heroHeadersTitle}>
                Interactive Simulated Data Interface!
              </h3>
            </div>
            <div className={index.heroContentWrapper}>
              <div className={index.heroContentTitleWrapper}>
                <h1 className={index.heroContentTitle}>
                  The Intuitive Fake API for Your Apps
                </h1>
              </div>
              <p className={index.heroContentDescription}>
                Imagine a world where you can fine-tune your web applications
                with precision, even before real data comes into play.{" "}
                <span className={index.heroContentDescriptionSpan}>
                  Devify intuitive interface allows you to test and validate
                  various scenarios effortlessly.
                </span>
              </p>
              <div
                className={index.heroUrlEndpointWrapper}
                onClick={() => handleCopy()}
                title="Click here to copy!"
              >
                <p className={index.heroUrlEndpoint}>
                  {endpoint}
                  <span>
                    <Typewriter
                      words={apiContent}
                      cursor
                      loop={false}
                      cursorStyle="|"
                      typeSpeed={160}
                      deleteSpeed={160}
                      delaySpeed={1000}
                    />
                  </span>
                </p>
              </div>
              <div className={index.heroCtaWrapper}>
                <Link href="/docs/v1/">
                  <PrimaryBtn className={index.primaryBtn}>
                    Get Started
                  </PrimaryBtn>
                </Link>
                <Link
                  href="/docs/v1/quick-start"
                  className={index.secondaryBtnWrapper}
                >
                  <SecondaryBtn className={index.secondaryBtn}>
                    Quick Start
                  </SecondaryBtn>
                </Link>
              </div>
              <Image
                src="/images/background/Ornament 43.svg"
                alt="arrowBackground"
                width="45"
                height="45"
                className={index.heroAbstractBackgroundTwo}
              />
              <div className={index.heroFeedbackWrapper}>
                {/* <div className={index.feedbackCta}>
                  Have an idea? <Link href="/feedback">Share it!</Link> Your
                  input makes a difference.
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
