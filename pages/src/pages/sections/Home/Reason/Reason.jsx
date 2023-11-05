import React, { useState, useEffect } from "react";
import index from "./styles/Reason.module.css";
import "react-loading-skeleton/dist/skeleton.css";

function Reason() {
  return (
    <div>
      <div className={index.container}>
        <div className={index.wrapper}>
          <div className={index.contentWrapper}>
            <h1 className={index.contentTitle}>Why Devify?</h1>
            <p className={index.contentDescription}>
              The Different Ways to Develop a Web App: Create a Different Ways
              to Develop a Web App.
            </p>
            <div className={index.cardsContentContainer}>
              <div className={index.cardsContentWrapper}>
                <img
                  src="/images/icons/fire.png"
                  alt="Icons"
                  width="33"
                  height="33"
                  className={index.cardImages}
                />
                <h3 className={index.cardContentTitle}>Simple Integration</h3>
                <p className={index.cardContentDescription}>
                  Implementing Mock API is a breeze. Its Free allows developers
                  to effortlessly integrate with Devify placeholder data in no
                  time
                </p>
              </div>
              <div className={index.cardsContentWrapper}>
                <img
                  src="/images/icons/clock.png"
                  alt="Icons"
                  width="33"
                  height="33"
                  className={index.cardImages}
                />
                <h3 className={index.cardContentTitle}>Time-Saving</h3>
                <p className={index.cardContentDescription}>
                  Eliminate waiting time for backend data. Start frontend
                  development with Devify instantaneous placeholder data.
                </p>
              </div>
              <div className={index.cardsContentWrapper}>
                <img
                  src="/images/icons/layers.png"
                  alt="Icons"
                  width="33"
                  height="33"
                  className={index.cardImages}
                />
                <h3 className={index.cardContentTitle}>Variability</h3>
                <p className={index.cardContentDescription}>
                  Unlock innovation, accelerate your progress, and redefine
                  development with Devify dynamic resources.
                </p>
              </div>
              <div className={index.cardsContentWrapper}>
                <img
                  src="/images/icons/speed.png"
                  alt="Icons"
                  width="33"
                  height="33"
                  className={index.cardImages}
                />
                <h3 className={index.cardContentTitle}>Acceleration</h3>
                <p className={index.cardContentDescription}>
                  Say goodbye to delays. Devify accelerates your web
                  development, testing for an efficient development cycle.
                </p>
              </div>
              <div className={index.cardsContentWrapper}>
                <img
                  src="/images/icons/money.png"
                  alt="Icons"
                  width="33"
                  height="33"
                  className={index.cardImages}
                />
                <h3 className={index.cardContentTitle}>Free to Use</h3>
                <p className={index.cardContentDescription}>
                  Fuel your creativity without spending a dime. Fake API offers
                  you a free ticket to innovative development.
                </p>
              </div>
              <div className={index.cardsContentWrapper}>
                <img
                  src="/images/icons/image.png"
                  alt="Icons"
                  width="33"
                  height="33"
                  className={index.cardImages}
                />
                <h3 className={index.cardContentTitle}>File Upload Image</h3>
                <p className={index.cardContentDescription}>
                  Experience a new dimension of creativity. Fake API now
                  empowers you to seamlessly upload image files.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reason;
