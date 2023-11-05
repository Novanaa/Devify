import React from "react";
import index from "./styles/Sponsors.module.css";
import Link from "next/link";

function Sponsors() {
  return (
    <>
      <div className={index.container}>
        <div className={index.wrapper}>
          <div className={index.contentWrapper}>
            <div className={index.sponsorsContainer}>
              <Link href="/" className={index.sponsorsWrapper}>
                <img
                  src="/images/sponsors/twitch.png"
                  alt="Twitch"
                  className={index.sponsors}
                  width={125}
                />
              </Link>
              <Link href="/" className={index.sponsorsWrapper}>
                <img
                  src="/images/sponsors/twitch.png"
                  alt="Twitch"
                  className={index.sponsors}
                  width={125}
                />
              </Link>
              <Link href="/" className={index.sponsorsWrapper}>
                <img
                  src="/images/sponsors/twitch.png"
                  alt="Twitch"
                  className={index.sponsors}
                  width={125}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsors;
