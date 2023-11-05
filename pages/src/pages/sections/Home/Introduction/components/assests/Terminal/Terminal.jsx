import React from "react";
import index from "./styles/Terminal.module.css";

function Terminal({ content, rotate }) {
  return (
    <>
      <div className={index.container}>
        <div
          className={index.wrapper}
          style={{ rotate: `${rotate == "" ? `0deg` : `${rotate}deg`}` }}
        >
          <div className={index.contentWrapper}>
            <div className={index.terminalHeadWrapper}>
              <span className={index.terminalIconOne}></span>
              <span className={index.terminalIconTwo}></span>
              <span className={index.terminalIconThree}></span>
            </div>
            <div className={index.terminalBodyWrapper}>
              <code className={index.terminalContent}>▲ ~ # {content}</code>
              <code className={index.terminalContent}>▲ ~ # </code>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Terminal;
