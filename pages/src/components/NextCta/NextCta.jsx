import React from "react";
import styles from "./styles/NextCta.module.css";
import Link from "next/link";
import Image from "next/image";

function NextCta({ frontmatter }) {
  const { next } = frontmatter;
  if (next == undefined) {
    next[0].link = "";
    next[1].link = "";
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href={next[1]?.link} className={styles.wrapperContent}>
          <span className={styles.nextBtn}>Next</span>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>{next[0]?.title}</div>
            <Image
              width={20}
              height={20}
              alt="arrow"
              src="/images/icons/right.svg"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NextCta;
