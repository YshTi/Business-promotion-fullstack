import { useCallback, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import sprite from "../../assets/symbol-defs.svg";
import { NavLink, Link } from "react-router-dom";
import AuthModal from "../AuthModal/AuthModal";

type AuthMode = "signIn" | "signUp";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode | null>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }, []);

  const openAuth = (mode: AuthMode) => {
    closeMenu();
    setAuthMode(mode);
  };

  const closeAuth = () => {
    setAuthMode(null);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, closeMenu]);

  const handleLogoClick = () => {
    closeMenu();

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`container ${styles["navbar-inner"]}`}>
          <Link
            to="/"
            className={styles["logo-wrapper"]}
            onClick={handleLogoClick}
          >
            <svg className="logo-img" width="40" height="36">
              <use href={`${sprite}#icon-Group-190`} />
            </svg>

            <span className="logo-text">Product</span>
          </Link>

          <ul className={styles.menu}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
              >
                Product
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/customers"
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
              >
                Customers
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
              >
                Pricing
              </NavLink>
            </li>

            <li>
              <a href="#resources" className={styles.link}>
                Resources
              </a>
            </li>
          </ul>

          <div className={styles.actions}>
            <button
              type="button"
              className={`button ${styles.signIn}`}
              onClick={() => openAuth("signIn")}
            >
              Sign In
            </button>

            <button
              type="button"
              className={`button ${styles.signUp}`}
              onClick={() => openAuth("signUp")}
            >
              Sign Up
            </button>
          </div>

          <button
            type="button"
            className={styles["menu-icon"]}
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
          >
            <svg width="28" height="31">
              <use href={`${sprite}#icon-menu`} />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`${styles.mobileOverlay} ${open ? styles.mobileOpen : ""}`}
        onClick={closeMenu}
        aria-hidden={!open}
      >
        <div
          className={styles.mobilePanel}
          onClick={(event) => event.stopPropagation()}
        >
          <div className={styles.mobileHeader}>
            <Link to="/" className={styles.mobileLogo} onClick={handleLogoClick}>
              <svg className="logo-img" width="40" height="36">
                <use href={`${sprite}#icon-Group-190`} />
              </svg>

              <span className="logo-text">Product</span>
            </Link>

            <button
              type="button"
              className={styles.mobileClose}
              onClick={closeMenu}
              aria-label="Close navigation menu"
            >
              ×
            </button>
          </div>

          <ul className={styles.mobileMenu}>
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${styles.mobileLink} ${isActive ? styles.active : ""}`
                }
              >
                Product
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/customers"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${styles.mobileLink} ${isActive ? styles.active : ""}`
                }
              >
                Customers
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pricing"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${styles.mobileLink} ${isActive ? styles.active : ""}`
                }
              >
                Pricing
              </NavLink>
            </li>

            <li>
              <a
                href="#resources"
                className={styles.mobileLink}
                onClick={closeMenu}
              >
                Resources
              </a>
            </li>
          </ul>

          <div className={styles.mobileActions}>
            <button
              type="button"
              className={`button ${styles.mobileSignIn}`}
              onClick={() => openAuth("signIn")}
            >
              Sign In
            </button>

            <button
              type="button"
              className={`button ${styles.mobileSignUp}`}
              onClick={() => openAuth("signUp")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {authMode && <AuthModal mode={authMode} onClose={closeAuth} />}
    </>
  );
};

export default Navbar;