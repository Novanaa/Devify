import React from "react";
import index from "./styles/Resources.module.css";
import Link from "next/link";
import { resources } from "@/resources/resources";

function Resources() {
  const ComingSoon = () => {
    return (
      <>
        <div className={index.comingSoonWrapper}>
          <div className={index.comingSoonContent}>Coming Soon</div>
        </div>
      </>
    );
  };
  const ResourcesComponent = () => {
    return resources.map((resource, i) => {
      return (
        <>
          <Link className={index.cardsWrapper} href={resource.url} key={i}>
            <img
              src={resource.poster}
              alt="test"
              className={index.cardImage}
              width="155"
              height="155"
            />
            <h3 className={index.cardTitle}>{resource.title}</h3>
            <p className={index.cardDescription}>{resource.description}</p>
          </Link>
        </>
      );
    });
  };
  return (
    <>
      <div className={index.container}>
        <div className={index.wrapper}>
          <div className={index.contentWrapper}>
            <h2 className={index.contentTitle}>
              Unveiling Devify, What&apos;s Inside?
            </h2>
            <p className={index.contentDescription}>
              Devify doesn&apos;t believe in the one-size-fits-all approach.
              Instead, we provide a curated selection of API resources, each
              designed to address specific development needs.
            </p>
            <div className={index.cardsContainer}>
              <ResourcesComponent />
              <ComingSoon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;
