import React, { useEffect, useRef, useState } from "react";
import index from "./styles/NavSearch.module.css";
import { Input } from "@/styles/global";
import Link from "next/link";
import { useQuery } from "@/hooks/useQuery";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDebounce } from "use-debounce";
import store from "@/store";
import { action } from "@/store/reducers/navbarReducer";
import { useSelector } from "react-redux";
import Image from "next/image";

function NavSearch() {
  const [query, setQuery] = useState("");
  const navRef = useRef();
  const isOpen = useSelector((state) => state.navbar.isOpen);
  useEffect(() => {
    let handleClick = (e) => {
      if (!navRef.current?.contains(e.target)) {
        store.dispatch(action.UPDATE_STATE({ isOpen: false }));
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  });

  useEffect(() => {
    let handleKey = (e) => {
      if (e.key == "/") {
        e.preventDefault();
        store.dispatch(action.UPDATE_STATE({ isOpen: true }));
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  });

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [isOpen]);

  const [debouncedQuery] = useDebounce(query, 1200);
  const { datas, isLoading, length, validate } = useQuery(
    `/api/docs/queries/search?q=${debouncedQuery}`,
    debouncedQuery
  );

  const NavSearchContentComponent = () => {
    if (isLoading)
      return (
        <>
          <div className={index.loadingComponentContainer}>
            {datas.map((data) => {
              return (
                <div className={index.loadingComponentWrapper} key={data.id}>
                  <Skeleton className={index.skeletonLoading} />
                </div>
              );
            })}
          </div>
        </>
      );
    if (!validate)
      return (
        <>
          <div className={index.emptyDatasResultContainer}>
            <div className={index.emptyDatasResultWrapper}>
              <Image
                src="/images/icons/notFound.svg"
                alt="NotFound"
                width="80"
                height="80"
              />
              <p className={index.emptyResultMessege}>
                No Result for: {`"${query}"`}
              </p>
              <p className={index.warningMessege}>
                Oops! No search history found.
              </p>
              <Link
                href="/docs"
                className={index.backBtnWrapper}
                title="Back to Documentation"
              >
                <Image
                  src="/images/icons/left-arrow.svg"
                  alt="left-arrow"
                  width="18"
                  height="18"
                  className={index.leftArrow}
                />
                <p className={index.backBtn} role="button">
                  Documentation
                </p>
              </Link>
            </div>
          </div>
        </>
      );
    return datas.map((data, i) => {
      return (
        <Link href={`/docs/${data.tags}/${data.alt}`} key={i}>
          <div
            className={index.navSearchContent}
            onClick={() =>
              store.dispatch(action.UPDATE_STATE({ isOpen: false }))
            }
          >
            <Image
              src="/images/icons/document.svg"
              alt="Docs"
              width="24"
              height="24"
              className={index.navSearchContentImagesPlaceholder}
            />
            <p className={index.navSearchContentTitle}>{data.title}</p>
          </div>
        </Link>
      );
    });
  };

  return (
    <div
      className={`${index.NavSearch} ${
        isOpen ? `${index.navOpen}` : `${index.navClose}`
      }`}
    >
      <nav className={index.navSearchContainer} ref={navRef}>
        <nav className={index.navWrapper}>
          <div className={index.navSearchHeaderWrapper}>
            <Image
              src="/images/icons/search.svg"
              alt="search"
              width="22"
              height="22"
              className={index.searchIcons}
            />
            <Input
              type="text"
              className={index.navSearchInput}
              placeholder="Search something...."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              autoFocus
            />
            <div
              className={index.navCancelBtn}
              onClick={() =>
                store.dispatch(action.UPDATE_STATE({ isOpen: false }))
              }
              role="button"
            >
              Cancel
            </div>
          </div>
          <div
            className={`${index.navLabelWrapper} ${
              query == "" ? `${index.hideLabel}` : ``
            } ${!validate ? `${index.showLabelBorder}` : ``} ${
              length < 6 ? `${index.showLabelBorder}` : ``
            }`}
          >
            <label className={`${index.navLabel}`}>Result for: {query}</label>
          </div>
          <div
            className={`${index.navSearchContentContainer} ${
              !validate ? `${index.navSearchContentContainerHidden}` : ``
            } ${length < 6 ? `${index.navSearchContentContainerHidden}` : ``}`}
          >
            <div
              className={`${index.navSearchContentWrapper} ${
                query !== ""
                  ? `${index.navSearchContentLabel}`
                  : `${index.navSearchContentLabelClose}`
              } `}
            >
              <NavSearchContentComponent />
            </div>
          </div>
          <div className={index.navSearchFooterWrapper}></div>
        </nav>
      </nav>
    </div>
  );
}

export default NavSearch;
