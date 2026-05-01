import { useState } from "react";
import styles from "./Navbar.module.css";
import sprite from "../../assets/symbol-defs.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`container ${styles["navbar-inner"]}`}>

          {/* LOGO */}
          <Link
            to="/"
            className={styles["logo-wrapper"]}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <svg className="logo-img" width="40" height="36">
              <use href={`${sprite}#icon-Group-190`} />
            </svg>

            <span className="logo-text">Product</span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className={styles.menu}>
            <li><NavLink to="/"
            className={({ isActive }) =>
                          `${styles.link} ${isActive ? styles.active : ""}`
                        }>Product</NavLink></li>
            <li><NavLink to="/customers"
            className={({ isActive }) =>
                          `${styles.link} ${isActive ? styles.active : ""}`
                        }>Customers</NavLink></li>
            <li><NavLink to="/pricing"
            className={({ isActive }) =>
                          `${styles.link} ${isActive ? styles.active : ""}`
                        }>Pricing</NavLink></li>
            <li><a href="#resources">Resources</a></li>
          </ul>

          {/* DESKTOP BUTTONS */}
          <div className={styles.actions}>
            <button className={`button ${styles.signIn}`}>Sign In</button>
            <button className={`button ${styles.signUp}`}>Sign Up</button>
          </div>

          {/* BURGER */}
          <div
            className={styles["menu-icon"]}
            onClick={() => setOpen(true)}
          >
            <svg width="28" height="31">
              <use href={`${sprite}#icon-menu`} />
            </svg>
          </div>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className={styles.mobile}>
          <div className={styles["mobile-header"]}>
            <span>Product</span>

            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <ul className={styles["mobile-menu"]}>
            <li><NavLink to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>Product</NavLink></li>
            <li><NavLink to="/customers" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>Customers</NavLink></li>
            <li><NavLink to="/pricing" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}>Pricing</NavLink></li>
            <li><a href="#resources">Resources</a></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;