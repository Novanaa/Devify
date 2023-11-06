import React from "react";
import index from "./styles/Feedback.module.css";
import { SecondaryBtn } from "@/styles/global";
import Link from "next/link";
import Image from "next/image";

function Feedback() {
  return (
    <>
      <div className={index.container}>
        <div className={index.wrapper}>
          <div className={index.contentWrapper}>
            <p className={index.contentHead}>Have a Quetions?</p>
            <h1 className={index.contentTitle}>Dive into Conversations.</h1>
            <p className={index.contentDescription}>
              Your opinions and insights are invaluable to us. They help us
              understand what we&apos;re doing right and where we can make
              improvements. Your feedback allows us to tailor our
              products/services to your needs and expectations
            </p>
            <div className={index.cardsContainer}>
              <div className={index.cardWrapper}>
                <Image
                  src="/images/icons/comment.png"
                  alt="Icons"
                  width={55}
                  height={55}
                />
                <h3 className={index.cardTitle}>Opinion Sharing</h3>
                <p className={index.cardDescription}>
                  Share your thoughts, ideas, and opinions on diverse subjects,
                  from current events and social issues to hobbies and personal
                  experiences.
                </p>
              </div>
              <div className={index.cardWrapper}>
                <Image
                  src="/images/icons/innovation.png"
                  alt="Icons"
                  width={55}
                  height={55}
                />
                <h3 className={index.cardTitle}>Innovation</h3>
                <p className={index.cardDescription}>
                  Your ideas can spark innovation and lead to exciting new
                  developments. Together, we can turn ideas into reality and
                  create a brighter future for all.
                </p>
              </div>
              <div className={index.cardWrapper}>
                <Image
                  src="/images/icons/improvement.png"
                  alt="Icons"
                  width={55}
                  height={55}
                />
                <h3 className={index.cardTitle}>Improvement</h3>
                <p className={index.cardDescription}>
                  Your feedback helps us identify areas where we can improve our
                  products/services, ensuring that they align more closely with
                  your needs.
                </p>
              </div>
            </div>
            <Link
              href="https://www.instagram.com/nvaa.jsx"
              className={index.btnWrapper}
            >
              <SecondaryBtn>Let&apos;s Connect!</SecondaryBtn>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
