import React, { useEffect } from "react";
import { MDCList } from "@material/list";
import "@material/drawer/dist/mdc.drawer.css";
import "@material/list/dist/mdc.list.css";

const Drawer = () => {
  useEffect(() => {
    const list = new MDCList(document.querySelector(".mdc-list"));
    list.wrapFocus = true;
  }, []);

  return (
    <aside className="mdc-drawer">
      <div className="mdc-drawer__content">
        <nav className="mdc-list">
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
  );
};

export default Drawer;
