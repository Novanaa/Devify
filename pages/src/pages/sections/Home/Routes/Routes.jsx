import React from "react";
import index from "./styles/Routes.module.css";
import Link from "next/link";

function Routes() {
  return (
    <>
      <div className={index.container}>
        <div className={index.wrapper}>
          <div className={index.contentWrapper}>
            <h1 className={index.contentTitle}>
              Navigating the Path to Efficient Communication
            </h1>
            <div className={index.cards}>
              <div className={index.cardsContainer}>
                <div className={index.cardWrapper}>
                  <div className={index.cardHeadersWrapper}>
                    <h2 className={index.cardTitle}>Books</h2>
                    <p className={index.routes}>/books</p>
                  </div>
                  <div className={index.cardRoutesContainer}>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.getHttpReq}`}
                      >
                        <span className={index.getHttpReq}>GET</span>
                      </div>
                      <Link href="/">/books/&lt;id&gt;</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.getHttpReq}`}
                      >
                        <span>GET</span>
                      </div>
                      <Link href="/">/books/key/&lt;id&gt;</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.getHttpReq}`}
                      >
                        <span>GET</span>
                      </div>
                      <Link href="/">/books/search?q</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.getHttpReq}`}
                      >
                        <span>GET</span>
                      </div>
                      <Link href="/">/books/categories</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.getHttpReq}`}
                      >
                        <span>GET</span>
                      </div>
                      <Link href="/">/books/categories/history</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.postHttpReq}`}
                      >
                        <span>POST</span>
                      </div>
                      <Link href="/">/books</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.patchHttpReq}`}
                      >
                        <span>PATCH</span>
                      </div>
                      <Link href="/">/books/&lt;id&gt;</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.patchHttpReq}`}
                      >
                        <span>PATCH</span>
                      </div>
                      <Link href="/">/books/key/&lt;id&gt;</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.delHttpReq}`}
                      >
                        <span>DEL</span>
                      </div>
                      <Link href="/">/books/&lt;id&gt;</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.delHttpReq}`}
                      >
                        <span>DEL</span>
                      </div>
                      <Link href="/">/books/key/&lt;id&gt;</Link>
                    </div>
                  </div>
                </div>
                <div className={index.cardWrapper}>
                  <div className={index.cardHeadersWrapper}>
                    <h2 className={index.cardTitle}>Products</h2>
                    <p className={index.routes}>/products</p>
                  </div>
                  <div className={index.cardRoutesContainer}>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.getHttpReq}`}
                      >
                        <span>GET</span>
                      </div>
                      <Link href="/">/products/&lt;id&gt;</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.getHttpReq}`}
                      >
                        <span>GET</span>
                      </div>
                      <Link href="/">/products/key/&lt;id&gt;</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.getHttpReq}`}
                      >
                        <span>GET</span>
                      </div>
                      <Link href="/">/products/search?q</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.getHttpReq}`}
                      >
                        <span>GET</span>
                      </div>
                      <Link href="/">/products/categories</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.getHttpReq}`}
                      >
                        <span>GET</span>
                      </div>
                      <Link href="/">/products/categories/mens</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.postHttpReq}`}
                      >
                        <span>POST</span>
                      </div>
                      <Link href="/">/products</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.patchHttpReq}`}
                      >
                        <span>PATCH</span>
                      </div>
                      <Link href="/">/products/&lt;id&gt;</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.patchHttpReq}`}
                      >
                        <span>PATCH</span>
                      </div>
                      <Link href="/">/products/key/&lt;id&gt;</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.delHttpReq}`}
                      >
                        <span>DEL</span>
                      </div>
                      <Link href="/">/products/&lt;id&gt;</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.delHttpReq}`}
                      >
                        <span>DEL</span>
                      </div>
                      <Link href="/">/products/key/&lt;id&gt;</Link>
                    </div>
                  </div>
                </div>
                <div className={index.cardWrapper}>
                  <div className={index.cardHeadersWrapper}>
                    <h2 className={index.cardTitle}>Users</h2>
                    <p className={index.routes}>/users</p>
                  </div>
                  <div className={index.cardRoutesContainer}>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.getHttpReq}`}
                      >
                        <span>GET</span>
                      </div>
                      <Link href="/">/users/&lt;id&gt;</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.getHttpReq}`}
                      >
                        <span className={index.getHttpReq}>GET</span>
                      </div>
                      <Link href="/">/users/key/&lt;id&gt;</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.getHttpReq}`}
                      >
                        <span className={index.getHttpReq}>GET</span>
                      </div>
                      <Link href="/">/users/search?q</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.postHttpReq}`}
                      >
                        <span>POST</span>
                      </div>
                      <Link href="/">/users</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.patchHttpReq}`}
                      >
                        <span>PATCH</span>
                      </div>
                      <Link href="/">/users/&lt;id&gt;</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.patchHttpReq}`}
                      >
                        <span>PATCH</span>
                      </div>
                      <Link href="/">/users/key/&lt;id&gt;</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.delHttpReq}`}
                      >
                        <span>DEL</span>
                      </div>
                      <Link href="/">/users/&lt;id&gt;</Link>
                    </div>
                    <div className={index.cardRoutesWrapper}>
                      <div
                        className={`${index.cardHttpReqWrapper} ${index.delHttpReq}`}
                      >
                        <span>DEL</span>
                      </div>
                      <Link href="/">/users/key/&lt;id&gt;</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Routes;
