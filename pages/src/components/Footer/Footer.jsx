import React from "react";
import index from "./styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className={index.container}>
        <div className={index.wrapper}>
          <div className={index.contentWrapper}>
            <Link
              href="https://www.instagram.com/nvaa.jsx/"
              className={index.contentProfileWrapper}
            >
              <div className={index.profileWrapper}>
                <Image
                  src="/images/profile/Nova.png"
                  alt="Nova"
                  className={index.profileImage}
                  width={55}
                  height={55}
                />
              </div>
              <div className={index.profileTitleWrapper}>
                <h3 className={index.profileName}>Nova</h3>
                <p className={index.profileTitle}>Creator of Devify</p>
              </div>
            </Link>
            <div className={index.contentLinkContainer}>
              <div className={index.contentLinkWrapper}>
                <h3 className={index.contentLinkTitle}>Resources</h3>
                <div className={index.contentLinkCtaWrapper}>
                  <Link href="/docs/v1">Docs</Link>
                  <Link href="/">Routes</Link>
                  <Link href="/">Products</Link>
                  <Link href="/">Users</Link>
                  <Link href="/">Books</Link>
                </div>
              </div>
              <div className={index.contentLinkWrapper}>
                <h3 className={index.contentLinkTitle}>Contacts</h3>
                <div className={index.contentLinkCtaWrapper}>
                  <Link href="https://www.instagram.com/nvaa.jsx/">
                    Instagram
                  </Link>
                  <Link href="/">Whatsapp</Link>
                  <Link href="/">Facebook</Link>
                  <Link href="/">Github</Link>
                </div>
              </div>
              <div className={index.contentLinkWrapper}>
                <h3 className={index.contentLinkTitle}>Support</h3>
                <div className={index.contentLinkCtaWrapper}>
                  <Link href="/">Buy me a coffe</Link>
                  <Link href="/">Sponsors</Link>
                </div>
              </div>
              <div className={index.contentLinkWrapper}>
                <h3 className={index.contentLinkTitle}>Community</h3>
                <div className={index.contentLinkCtaWrapper}>
                  <Link href="/">Github</Link>
                  <Link href="/">Twitter</Link>
                </div>
              </div>
            </div>
          </div>
          <h4 className={index.copyright}>
            © {new Date().getFullYear()} Devify, Inc. All rights reserved.
          </h4>
        </div>
      </div>
    </>
  );
}

export default Footer;
