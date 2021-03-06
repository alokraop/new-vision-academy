import logo from "./assets/logo.png";
import { ReactComponent as Menu } from "./assets/menu.svg";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.scss";
import { useState } from "react";

function Layout() {
  const [showMenu, setShowMenu] = useState(false);
  const [tab, setTab] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  function changeTab(name: string = "") {
    setTab(name);
    navigate(`/${name}`);
    if (showMenu) setShowMenu(() => false);
  }

  return (
    <section className={styles.page}>
      <nav className={styles.topbar}>
        <div className={styles.title}>
          <div className={styles.logo} onClick={() => changeTab()}>
            <img src={logo} alt="Academy Logo" />
          </div>
          <h1>New Vision Academy</h1>
          <div className={styles.menu} onClick={() => setShowMenu((m) => !m)}>
            <Menu className={`${styles.icon}`} />
          </div>
        </div>
        <div className={`${styles.tabs} ${showMenu ? "" : styles.hidden}`}>
          <div
            className={`${styles.tab} ${
              tab === "facilities" ? styles.active : ""
            }`}
            onClick={() => changeTab("facilities")}
          >
            Facilities
          </div>
          <div
            className={`${styles.tab} ${
              tab === "affiliation" ? styles.active : ""
            }`}
            onClick={() => changeTab("affiliation")}
          >
            Affiliation
          </div>
          <div
            className={`${styles.tab} ${
              tab === "contact" ? styles.active : ""
            }`}
            onClick={() => changeTab("contact")}
          >
            Contact Us
          </div>
        </div>
      </nav>
      <Outlet />
    </section>
  );
}

export default Layout;
