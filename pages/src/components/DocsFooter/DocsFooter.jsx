import React, { useEffect } from "react";
import styles from "./styles/DocsFooter.module.css";
import { Link, scrollSpy } from "react-scroll";

function DocsFooter({ docs, html }) {
  scrollSpy.update();
  let { content, slug: links } = docs;
  content = content == undefined ? [] : content;
  links = links == undefined ? [] : links;

  // useEffect(() => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(html, "text/html");
  //   const headings = doc.querySelectorAll("h2");
  //   const navLinks = document.querySelectorAll("a .contentLists");
  //   window.onscroll = () => {
  //     headings.forEach((h) => {
  //       const top = window.scrollY;
  //       const offset = h.offsetTop;
  //       const id = h.getAttribute("id");

  //       if (top >= offset) {
  //         navLinks.forEach((link) => {
  //           link.classList.remove(`active`);
  //           document
  //             .querySelector("a[href*=" + id + "] .contentLists")
  //             .classList.add(styles.active);
  //         });
  //       }
  //     });
  //   };
  // });

  // useEffect(() => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(html, "text/html");
  //   const headings = doc.querySelectorAll("h2");
  //   const navLinks = document.querySelectorAll("a .contentLists");
  //   let current = links[0];

  //   function handleScroll() {
  //     headings.forEach((h) => {
  //       if (window.scrollY >= h.offsetTop) {
  //         current = h.id;
  //       }
  //     });

  //     navLinks.forEach((link) => {
  //       if (link.href.includes(current)) {
  //         link.classList.add(styles.active);
  //       }
  //     });
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  // const parser = new DOMParser();
  // const doc = parser.parseFromString(html, "text/html");
  // const headings = doc.querySelectorAll("h2");

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperContent}>
          <h4 className={styles.title}>On This Page</h4>
          <ul className={styles.contentListsWrapper}>
            {content?.map((list, i) => {
              const slug = links[i];
              // const clsName =
              //   i == 0 ? `active ${styles.contentLists}` : styles.contentLists;
              return (
                <Link
                  href={`#${slug}`}
                  className={styles.contentLists}
                  key={i}
                  to={slug}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-95}
                >
                  {list}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DocsFooter;
