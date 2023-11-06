import React from "react";
import index from "./styles/Features.module.css";
import Image from "next/image";

function Features() {
  return (
    <>
      <div className={index.container}>
        <div className={index.wrapper}>
          <div className={index.contentWrapper}>
            <h1 className={index.contentTitle}>Features</h1>
            <div className={index.cardsContainer}>
              <div className={index.cardWrapper}>
                <Image
                  src="/images/background/media-images.png"
                  alt="Image"
                  className={index.cardImage}
                  width={180}
                  height={180}
                />
                <h3 className={index.cardTitle}>Image Upload Support</h3>
                <p className={index.cardDescription}>
                  Devify Fake API allows users to upload images in various
                  formats such as JPEG, PNG, and more.
                </p>
              </div>
              <div className={index.cardWrapper}>
                <Image
                  src="/images/background/folder.png"
                  alt="Image"
                  className={index.cardImage}
                  width={180}
                  height={180}
                />
                <h3 className={index.cardTitle}>Diverse Data Types</h3>
                <p className={index.cardDescription}>
                  The API supports various types of fake data, including text,
                  numbers, dates, images, and more, catering to a wide range of
                  development needs.
                </p>
              </div>
              <div className={index.cardWrapper}>
                <Image
                  src="/images/background/variety.png"
                  alt="Image"
                  className={index.cardImage}
                  width={180}
                  height={180}
                />
                <h3 className={index.cardTitle}>Data Variety</h3>
                <p className={index.cardDescription}>
                  Devify Fake API provides a variety of fake data categories
                  such as people, products, and more.
                </p>
              </div>
              <div className={index.cardWrapper}>
                <h3 className={index.cardTitle}>Data Validation</h3>
                <p className={index.cardDescription}>
                  The API can validate generated data to ensure the integrity of
                  the fake data produced.
                </p>
              </div>
              <div className={index.cardWrapper}>
                <h3 className={index.cardTitle}>Realistic Image Overlays</h3>
                <p className={index.cardDescription}>
                  You can incorporate realistic image overlays such as user
                  avatars, stickers, or watermarks into uploaded images.
                </p>
              </div>
              <div className={index.cardWrapper}>
                <h3 className={index.cardTitle}>Custom Data Generation</h3>
                <p className={index.cardDescription}>
                  You can generate fake data with customizable parameters like
                  name, address, email, and more. This enables users to create
                  fake data with different
                </p>
              </div>
              <div className={index.cardWrapper}>
                <h3 className={index.cardTitle}>Dynamic Data Schemas</h3>
                <p className={index.cardDescription}>
                  Devify enables users to dynamically define data schemas,
                  allowing them to generate data with varying structures as per
                  project requirements
                </p>
              </div>
              <div className={index.cardWrapper}>
                <h3 className={index.cardTitle}>Coming Soon</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
