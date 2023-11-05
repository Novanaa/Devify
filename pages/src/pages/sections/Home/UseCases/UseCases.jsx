import React from "react";
import index from "./styles/UseCases.module.css";
import { useCases } from "@/resources/useCases";

function UseCases() {
  const UseCaseComponent = () => {
    return useCases.map((data, i) => {
      return (
        <>
          <div className={index.cardWrapper} key={i}>
            <img
              src={data.poster}
              alt="poster"
              className={index.cardImage}
              width={195}
              height={195}
            />
            <h3 className={index.cardTitle}>{data.title}</h3>
            <p className={index.cardDescription}>{data.description}</p>
          </div>
        </>
      );
    });
  };
  return (
    <>
      <div className={index.container}>
        <div className={index.wrapper}>
          <div className={index.contentWrapper}>
            <h2 className={index.contentTitle}>Diverse Use Cases Unveiled</h2>
            <p className={index.contentDescription}>
              In the dynamic realm of web app development, harnessing efficient
              tools is paramount to success. Enter Devify, a{" "}
              <span>
                game-changing solution that offers a simulated API experience
                for developers.
              </span>
            </p>
            <div className={index.cardsContainer}>
              <UseCaseComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseCases;
