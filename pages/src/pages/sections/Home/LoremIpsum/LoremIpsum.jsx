import React from "react";
import index from "./styles/LoremIpsum.module.css";

function LoremIpsum() {
  return (
    <>
      <div className={index.container}>
        <div className={index.wrapper}>
          <div className={index.contentWrapper}>
            <h1 className={index.contentTitle}>
              Is Lorem Ipsum Data Still Worth It?
            </h1>
            <p className={index.contentDescription}>
              In web and graphic design, Lorem Ipsum has been the traditional
              choice for placeholder text, offering simplicity for focusing on
              aesthetics. But with the evolving need for user-centric design,
              it&apos;s time to rethink its relevance. Using Lorem Ipsum as
              placeholder data in web content is no longer worth it.
            </p>
            <div className={index.profileContainer}>
              <div className={index.profileImageWrapper}>
                <img
                  src="/images/profile/Nova.png"
                  alt="Nova"
                  className={index.profileImage}
                  width={60}
                  height={60}
                />
              </div>
              <div className={index.profileWrapper}>
                <h3 className={index.profileName}>Nova</h3>
                <p className={index.profileTitle}>Creator of Devify</p>
              </div>
            </div>
            <div className={index.cardsContainer}>
              <div className={index.cardWrapper}>
                <img
                  src="/images/icons/realism.png"
                  alt="Icons"
                  className={index.cardImage}
                  width={60}
                  height={60}
                />
                <h3 className={index.cardTitle}>
                  Creating User-Friendly Designs
                </h3>
                <p className={index.cardDescription}>
                  Lorem Ipsum, by its very nature, lacks context and meaning. In
                  contrast, Devify offers the opportunity to simulate real
                  content.
                </p>
              </div>
              <div className={index.cardWrapper}>
                <img
                  src="/images/icons/chart.png"
                  alt="Icons"
                  className={index.cardImage}
                  width={60}
                  height={60}
                />
                <h3 className={index.cardTitle}>Content-First Approach</h3>
                <p className={index.cardDescription}>
                  The design and content of a website or application should work
                  harmoniously. Devify allows developers to insert actual
                  content during the design phase.
                </p>
              </div>
              <div className={index.cardWrapper}>
                <img
                  src="/images/icons/open-book.png"
                  alt="Icons"
                  className={index.cardImage}
                  width={60}
                  height={60}
                />
                <h3 className={index.cardTitle}>
                  Accessibility and Readability
                </h3>
                <p className={index.cardDescription}>
                  User accessibility is a priority in modern design. Real
                  content, unlike Lorem Ipsum, Devify provides an opportunity to
                  evaluate the design&apos;s accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoremIpsum;
