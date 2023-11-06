"use client";
import React, { useEffect, useRef } from "react";
import index from "./styles/Language.module.css";
import Link from "next/link";
import Image from "next/image";

function Language({ isShow, setIsShow }) {
  const dropdownRef = useRef();
  useEffect(() => {
    let handleClick = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setIsShow(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  });
  return (
    <div
      className={`${index.dropdown} ${
        isShow ? `${index.dropdownOpen}` : `${index.dropdownClose}`
      }`}
      ref={dropdownRef}
    >
      <div className={index.dropdownContainer}>
        <div className={index.dropdownWrapper}>
          <Link href="/?lang=en" className={index.dropdownContentWrapper}>
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
          <Link href="/?lang=id" className={index.dropdownContentWrapper}>
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
          <div className={index.dropdownContentWrapper}></div>
        </div>
      </div>
    </div>
  );
}

export default Language;
