import React, { useState } from "react";
import index from "./styles/NavMobile.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function NavMobile({ isNav, setIsOpen, setIsNav }) {
  const [isLang, setIsLang] = useState(false);
  const router = useRouter();
  const lang = router.query.lang;
  return (
    <>
      <div
        className={`${index.mobileNav} ${
          isNav ? `${index.showMobileNav}` : ``
        }`}
      >
        <div className={index.navMobieContainer}>
          <div className={index.navMobieWrapper}>
            <div className={index.navMobileBrandWrapper}>
              <Link href="/">
                <Image
                  src="/images/icons/devify.png"
                  alt="Devify"
                  className={index.devifyLogo}
                  width="30"
                  height="30"
                  title="Devify"
                />
              </Link>
              <div className={index.navMobieBrandBtnWrapper}>
                <Image
                  src="/images/icons/search.svg"
                  width="23"
                  height="23"
                  alt="search"
                  className={index.navSearchIcons}
                  onClick={setIsOpen}
                  title="Search whatever you want"
                />
                <Image
                  src="/images/icons/x.svg"
                  alt="Close"
                  className={index.closeIcon}
                  width="25"
                  height="25"
                  onClick={() => setIsNav(false)}
                  title="Cancel?"
                />
              </div>
            </div>
            <ul className={index.navMobilListWrapper}>
              <li>
                <Link href="/docs/v1">Docs</Link>
              </li>
              <li>
                <Link href="/docs/v1/resources">Resources</Link>
              </li>
              <li>
                <Link href="/docs/v1/quick-start">Quick Start</Link>
              </li>
              <li>
                <Link href="https://github.com/ItsNvaa/Devify">Support</Link>
              </li>
            </ul>
            <div className={index.navMobileContentWrapper}>
              {/* <div
                className={`${index.navLangWrapper}`}
                onClick={() => setIsLang(!isLang)}
              >
                <Image
                  src="/images/icons/lang.svg"
                  alt="Lang"
                  width="28"
                  height="28"
                  className={index.langImage}
                />
                <h4 className={index.navLangTite}>
                  {lang == "id" ? "Indonesian" : "English"}
                </h4>
                <Image
                  src="/images/icons/down.svg"
                  width="18"
                  height="18"
                  alt="dropdown"
                  className={`${index.dropdown} ${
                    isLang ? `${index.dropdownIndicatorAnimation}` : ``
                  }`}
                />
              </div>
              <div
                className={`${index.navLangContentWrapper} ${
                  isLang ? `${index.showNavLang}` : ``
                }`}
              >
                <Link href="/?lang=en" className={index.langContentWrapper}>
                  <Image
                    src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ec-1f1e7.svg"
                    alt="English"
                    width="20"
                    height="20"
                    title="English"
                  />
                  <p className={index.english}>English</p>
                  <Image
                    src="/images/icons/arrow-right.svg"
                    alt="arrow"
                    width="12"
                    height="12"
                    style={{ opacity: "0.6" }}
                  />
                </Link>
                <Link href="/?lang=id" className={index.langContentWrapper}>
                  <Image
                    src="/images/icons/indonesia.png"
                    alt="Indonesian"
                    width="20"
                    height="20"
                    title="English"
                  />
                  <p className={index.indonesia}>Indonesian</p>
                  <Image
                    src="/images/icons/arrow-right.svg"
                    alt="arrow"
                    width="12"
                    height="12"
                    style={{ opacity: "0.6" }}
                  />
                </Link>
              </div> */}
              <div className={index.navMobileLinkWrapper}>
                <Link
                  href="https://www.buymeacoffee.com/kadeknova"
                  className={`${index.navCoffeImageWrapper}`}
                  title="Buy Me A Coffee✨"
                >
                  <Image
                    src="/images/icons/coffee.svg"
                    width="30"
                    height="30"
                    alt="Coffe"
                    className={index.navCoffeImage}
                  />
                </Link>
                <Link
                  href="https://github.com/ItsNvaa/Devify"
                  className={`${index.navGitImageWrapper}`}
                  title="Github"
                >
                  <Image
                    src="/images/icons/git.svg"
                    width="36"
                    height="36"
                    alt="Github"
                    className={index.gitImage}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavMobile;
