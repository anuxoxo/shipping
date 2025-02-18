import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiSolidShip } from "react-icons/bi";
import styles from "../styles/Navbar.module.scss";

const Navbar = memo(() => {
  const path = useLocation();

  return (
    <div className={`${styles.Navbar}`}>
      <div className={`${styles.Navbar__icon}`}>
        <BiSolidShip size={40} color="#7743db" />
        <p>ShipBox</p>
      </div>
      <div className={`${styles.Navbar__links}`}>
        <Link
          className={`${styles.Navbar__item} ${
            path.pathname === "/" && styles.Navbar__item_active
          }`}
          to="/"
        >
          Add Box
        </Link>
        <Link
          className={`${styles.Navbar__item} ${
            path.pathname === "/table" && styles.Navbar__item_active
          }`}
          to="/table"
        >
          View Boxes
        </Link>
      </div>
    </div>
  );
});

export default Navbar;
