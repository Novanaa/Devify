import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/DocsNavbar.module.css";
import { Input } from "@/styles/global";
import { useDispatch, useSelector } from "react-redux";
import { action } from "@/store/reducers/navbarReducer";
import lists from "@/resources/docsNavbarList.json";
import { useRouter } from "next/router";

function DocsNavbar() {
  const router = useRouter();
  const [isShow, setIsShow] = useState(false);
  const isOpen = useSelector((state) => state.navbar.isOpen);
  const dispatch = useDispatch();
  const defaultUrl = !router.query.slug
    ? router.pathname
    : `/docs/v1/${router.query.slug}`;

  const updateState = () =>
    dispatch(action.UPDATE_STATE({ isOpen: !isOpen })).payload.isOpen;

  useEffect(() => {
    isShow
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isShow]);

  function Lists() {
    return (
      <div className={`${styles.listsWrapper}`}>
        {lists.map((list, i) => {
          return (
            <div key={i}>
              <h3 className={styles.listTitle}># {list.title}</h3>
              <div className={styles.itemsWrapper}>
                {list.items.map((item, i) => {
                  return (
                    <Link
                      href={item.url}
                      key={i}
                      className={`${styles.itemsLists} ${
                        defaultUrl == item.url ? `${styles.active}` : ``
                      }`}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperContent}>
          <div className={styles.menuContainer}>
            <div className={styles.menuWrapper}>
              <Image
                alt="menu"
                src="/images/icons/menu.svg"
                width={15}
                height={15}
                className={styles.menu}
                onClick={() => setIsShow(!isShow)}
              />
              <span
                className={styles.menuText}
                onClick={() => setIsShow(!isShow)}
              >
                Menu
              </span>
            </div>
          </div>
          <div
            className={`${styles.listsContainer} ${
              isShow ? `${styles.listsOpen}` : `${styles.listsClose}`
            }`}
          >
            <div className={styles.listsContainerContent}>
              <div className={styles.inputContainer}>
                <div className={`${styles.inputWrapper}`} onClick={updateState}>
                  <Image
                    src="/images/icons/search.svg"
                    width="17"
                    height="17"
                    alt="search"
                    className={styles.searchIcons}
                  />
                  <Input
                    type="text"
                    placeholder="Search (Press '/' to focus)"
                    className={styles.input}
                  />
                </div>
              </div>
              <Lists />
            </div>
            <div
              className={styles.closeBtnWrapper}
              onClick={() => setIsShow(false)}
            >
              <Image
                alt="close"
                width={26}
                height={26}
                src="/images/icons/x.svg"
                className={styles.closeBtn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocsNavbar;
