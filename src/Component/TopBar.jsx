// TopAppBar.js
import React, { useEffect, useState } from "react";
import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCList } from "@material/list";
import "@material/top-app-bar/dist/mdc.top-app-bar.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/drawer/dist/mdc.drawer.css";
import "@material/list/dist/mdc.list.css";
import "../Style/TopBar.css"; // Add your custom CSS file for styling

const TopAppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const topAppBarElement = document.querySelector(".mdc-top-app-bar");
    const topAppBar = new MDCTopAppBar(topAppBarElement);
    const list = new MDCList(document.querySelector(".mdc-list"));
    list.wrapFocus = true;
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="mdc-top-app-bar top-bar-change">
        <div className="mdc-top-app-bar__row">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button
              onClick={toggleMenu}
              className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button burger-menu"
              aria-label="Open navigation menu"
            >
              {isMenuOpen ? (
                <i className="fa-solid fa-bars"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </button>
            <span className="mdc-top-app-bar__title page-title header-z">
              KAK SIKOR
            </span>
          </section>
          <section
            className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end icon-change"
            role="toolbar"
          >
            <button
              className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
              aria-label="Favorite"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C13.5913 0 15.1174 0.632141 16.2426 1.75736C17.3679 2.88258 18 4.4087 18 6C18 7.5913 17.3679 9.11742 16.2426 10.2426C15.1174 11.3679 13.5913 12 12 12C10.4087 12 8.88258 11.3679 7.75736 10.2426C6.63214 9.11742 6 7.5913 6 6C6 4.4087 6.63214 2.88258 7.75736 1.75736C8.88258 0.632141 10.4087 0 12 0ZM12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6C9 6.79565 9.31607 7.55871 9.87868 8.12132C10.4413 8.68393 11.2044 9 12 9C12.7956 9 13.5587 8.68393 14.1213 8.12132C14.6839 7.55871 15 6.79565 15 6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3ZM12 13.5C16.005 13.5 24 15.495 24 19.5V24H0V19.5C0 15.495 7.995 13.5 12 13.5ZM12 16.35C7.545 16.35 2.85 18.54 2.85 19.5V21.15H21.15V19.5C21.15 18.54 16.455 16.35 12 16.35Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
              aria-label="Search"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2 19.2C19.8365 19.2 20.447 19.4529 20.8971 19.9029C21.3471 20.353 21.6 20.9635 21.6 21.6C21.6 22.2365 21.3471 22.847 20.8971 23.2971C20.447 23.7471 19.8365 24 19.2 24C18.5635 24 17.953 23.7471 17.5029 23.2971C17.0529 22.847 16.8 22.2365 16.8 21.6C16.8 20.268 17.868 19.2 19.2 19.2ZM0 0H3.924L5.052 2.4H22.8C23.1183 2.4 23.4235 2.52643 23.6485 2.75147C23.8736 2.97652 24 3.28174 24 3.6C24 3.804 23.94 4.008 23.856 4.2L19.56 11.964C19.152 12.696 18.36 13.2 17.46 13.2H8.52L7.44 15.156L7.404 15.3C7.404 15.3796 7.43561 15.4559 7.49187 15.5121C7.54813 15.5684 7.62444 15.6 7.704 15.6H21.6V18H7.2C6.56348 18 5.95303 17.7471 5.50294 17.2971C5.05286 16.847 4.8 16.2365 4.8 15.6C4.8 15.18 4.908 14.784 5.088 14.448L6.72 11.508L2.4 2.4H0V0ZM7.2 19.2C7.83652 19.2 8.44697 19.4529 8.89706 19.9029C9.34714 20.353 9.6 20.9635 9.6 21.6C9.6 22.2365 9.34714 22.847 8.89706 23.2971C8.44697 23.7471 7.83652 24 7.2 24C6.56348 24 5.95303 23.7471 5.50294 23.2971C5.05286 22.847 4.8 22.2365 4.8 21.6C4.8 20.268 5.868 19.2 7.2 19.2ZM18 10.8L21.336 4.8H6.168L9 10.8H18Z"
                  fill="black"
                />
              </svg>
            </button>
          </section>
        </div>
      </header>
      {/* Additional menu content */}
      <div
        className="menu-content"
        style={{
          transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <aside className="mdc-drawer">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <div class="mdc-drawer__header drawer-header">
            <h3 class="mdc-drawer__title">Pong Kdor</h3>
            <h6 class="mdc-drawer__subtitle">Admin@material.io</h6>
          </div>
          <div className="mdc-drawer__content">
            <nav className="mdc-list custom-drawer-style">
              <a
                className="mdc-list-item mdc-list-item--activated"
                href="#"
                aria-current="page"
              >
                <span className="mdc-list-item__ripple"></span>
                <i
                  className="material-icons mdc-list-item__graphic"
                  aria-hidden="true"
                >
                  inbox
                </i>
                <span className="mdc-list-item__text">Inbox</span>
              </a>
              <a className="mdc-list-item" href="#">
                <span className="mdc-list-item__ripple"></span>
                <i
                  className="material-icons mdc-list-item__graphic"
                  aria-hidden="true"
                >
                  send
                </i>
                <span className="mdc-list-item__text">Outgoing</span>
              </a>
              <a className="mdc-list-item" href="#">
                <span className="mdc-list-item__ripple"></span>
                <i
                  className="material-icons mdc-list-item__graphic"
                  aria-hidden="true"
                >
                  drafts
                </i>
                <span className="mdc-list-item__text">Drafts</span>
              </a>
            </nav>
          </div>
        </aside>
      </div>
      <main className="mdc-top-app-bar--fixed-adjust">App content</main>
    </>
  );
};

export default TopAppBar;
