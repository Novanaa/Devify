import React, { useState } from "react";
import index from "./styles/Code.module.css";

function Code({ rotate }) {
  return (
    <>
      <div className={index.container}>
        <div
          className={index.wrapper}
          style={{ rotate: `${rotate == "" ? `0deg` : `${rotate}deg`}` }}
        >
          <div className={index.contentWrapper}>
            <div className={index.codeHeaderWrapper}>
              <span className={index.codeIcon}></span>
              <span className={index.codeIcon}></span>
              <span className={index.codeIcon}></span>
              <div className={index.codeIconLogoWrapper}>
                <img
                  src="/images/icons/js.png"
                  alt="lang"
                  width="20"
                  height="20"
                  className={index.codeIconImage}
                />
                <p className={index.codeName}>index.js</p>
              </div>
            </div>
            <div className={index.codeContentWrapper}>
              <code className={`${index.codeContent} font-code`}>
                <span style={{ color: "var(--method)" }}>
                  fetch
                  <span style={{ color: "var(--parentheses)" }}>
                    (
                    <span>
                      &quot;https://api-devify.my.id/v1/products&quot;
                    </span>
                    )
                  </span>
                </span>
                <br />
                <span style={{ color: "var(--method)" }}>
                  .then
                  <span>
                    (<span>response</span>{" "}
                    <span style={{ color: "var(--parentheses)" }}>=&gt;</span>{" "}
                    <span>response.</span>
                    json())
                  </span>
                </span>
                <br />
                <span style={{ color: "var(--method)" }}>
                  .then
                  <span>
                    (<span>datas</span>{" "}
                    <span style={{ color: "var(--parentheses)" }}>=&gt;</span>{" "}
                    <span>
                      console<span>.log</span>(datas.<span>products</span>)
                    </span>
                    )
                  </span>
                </span>
              </code>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Code;
