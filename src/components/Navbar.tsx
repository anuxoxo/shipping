import { memo } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "../styles/Navbar.module.scss";

const Navbar = memo(() => {
  const path = useLocation();

  return (
    <div className={`${styles.Navbar}`}>
      <Link
        className={`${styles.Navbar__item} ${
          path.pathname === "/" && styles.Navbar__item_active
        }`}
        to="/"
      >
        Form
      </Link>
      <Link
        className={`${styles.Navbar__item} ${
          path.pathname === "/table" && styles.Navbar__item_active
        }`}
        to="/table"
      >
        Table
      </Link>
    </div>
  );
});

export default Navbar;
