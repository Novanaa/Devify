"use client";
import React, { useEffect, useState } from "react";
import navbar from "./styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import NavSearch from "./NavSearch";
import Language from "./Language";
import { Input } from "@/styles/global";
import NavMobile from "./NavMobile";
import store from "@/store";
import { action } from "@/store/reducers/navbarReducer";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

function Navbar() {
  const [isShow, setIsShow] = useState(false);
  const [routes, setRoutes] = useState(null);
  const [isNav, setIsNav] = useState(false);
  const isOpen = useSelector((state) => state.navbar.isOpen);
  const dispatch = useDispatch();
  const router = useRouter();
  const defaultUrl = !router.query.slug
    ? router.pathname
    : `/docs/v1/${router.query.slug}`;

  const updateState = () =>
    dispatch(action.UPDATE_STATE({ isOpen: !isOpen })).payload.isOpen;

  const navRoutes = ["/docs/v1", "/docs/v1/resources", "/docs/v1/quick-start"];

  useEffect(() => {
    navRoutes.map((route) => setRoutes(route));
  }, [routes]);

  const NavbarComponent = () => {
    return (
      <>
        <nav className={navbar.navbar}>
          <nav className={navbar.navContainer}>
            <nav className={navbar.navWrapper}>
              <div className={navbar.navContentHeadersWrapper}>
                <Link
                  className={navbar.navBrandWrapper}
                  href="/"
                  title="Devify"
                >
                  <img
                    src="/images/icons/devify.png"
                    alt="Devify"
                    className={navbar.devifyLogo}
                    width="28"
                    height="28"
                  />
                </Link>
                <ul className={`${navbar.navList}`}>
                  <li
                    className={`${
                      defaultUrl == navRoutes[0] ? `${navbar.active}` : ``
                    }`}
                  >
                    <Link href="/docs/v1">Docs</Link>
                  </li>
                  <li
                    className={`${
                      defaultUrl == navRoutes[1] ? `${navbar.active}` : ``
                    }`}
                  >
                    <Link href="/docs/v1/resources">Resources</Link>
                  </li>
                  <li
                    className={`${
                      defaultUrl == navRoutes[2] ? `${navbar.active}` : ``
                    }`}
                  >
                    <Link href="/docs/v1/quick-start">Quick Start</Link>
                  </li>
                  <li>
                    <Link href="https://github.com/ItsNvaa/Devify">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={navbar.navContentWrapper}>
                <img
                  src="/images/icons/menu.svg"
                  alt="menu"
                  title="Menu"
                  width="21"
                  height="21"
                  className={navbar.menuImage}
                  onClick={() => setIsNav(!isNav)}
                />
                <div className={navbar.navInputWrapper}>
                  <Image
                    src="/images/icons/search.svg"
                    width="17"
                    height="17"
                    alt="search"
                    className={navbar.navSearchIcons}
                    onClick={updateState}
                  />
                  <Input
                    type="text"
                    placeholder="Search (Press '/' to focus)"
                    className={navbar.navInput}
                    onClick={updateState}
                  />
                </div>
                {/* <div
                  className={`${navbar.langWrapper} ${
                    isShow ? `${navbar.activeLang}` : ``
                  }`}
                  title="Language"
                  onClick={() => setIsShow(!isShow)}
                >
                  <Image
                    src="/images/icons/lang.svg"
                    alt="Lang"
                    width="20"
                    height="20"
                    className={navbar.langImage}
                  />
                  <Image
                    src="/images/icons/down.svg"
                    width="16"
                    height="16"
                    alt="dropdown"
                    className={`${navbar.dropdown} ${
                      isShow ? `${navbar.openMenu}` : ``
                    }`}
                  />
                </div> */}
                <Link
                  href="https://www.buymeacoffee.com/kadeknova"
                  className={`${navbar.navCoffeImageWrapper}`}
                  title="Buy Me A Coffee✨"
                >
                  <Image
                    src="/images/icons/coffee.svg"
                    width="21"
                    height="21"
                    alt="Coffe"
                    className={navbar.navCoffeImage}
                  />
                </Link>
                <Link
                  href="https://github.com/ItsNvaa/Devify"
                  className={`${navbar.navGitImageWrapper}`}
                  title="Github"
                >
                  <Image
                    src="/images/icons/git.svg"
                    width="26"
                    height="26"
                    alt="Github"
                    className={navbar.gitImage}
                  />
                </Link>
              </div>
            </nav>
          </nav>
        </nav>
      </>
    );
  };
  return (
    <>
      <NavbarComponent />
      {/* <Language isShow={isShow} setIsShow={setIsShow} /> */}
      <NavSearch />
      <NavMobile isNav={isNav} setIsNav={setIsNav} />
    </>
  );
}

export default Navbar;
