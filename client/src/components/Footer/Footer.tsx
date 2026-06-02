import { useState } from "react";
import styles from "./Footer.module.css";
import sprite from "../../assets/symbol-defs.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [locked, setLocked] = useState(false);
  const [success, setSuccess] = useState("");

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmail(value);
    setSuccess("");

    if (!value.trim()) {
      setError("");
      setLocked(false);
      return;
    }

    if (!regex.test(value)) {
      setError("Use format: name@example.com");
    } else {
      setError("");
      setLocked(false);
    }
  };

  const handleSubmit = () => {
    const trimmedEmail = email.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedEmail || !regex.test(trimmedEmail)) {
      setError("Use format: name@example.com");
      setSuccess("");
      setLocked(true);
      return;
    }

    console.log("Footer signup email:", trimmedEmail);

    setEmail("");
    setError("");
    setLocked(false);
    setSuccess("Thank you! You have successfully signed up.");

    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <footer id="resources" className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link
            to="/"
            className={styles["logo-footer"]}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <svg className={`logo-img ${styles["logo-img-footer"]}`}>
              <use href={`${sprite}#icon-Group-190`} />
            </svg>

            <span className={`logo-text ${styles["logo-text-footer"]}`}>
              Product
            </span>
          </Link>

          <ul className={styles.socials}>
            {["instagram", "facebook", "twitter"].map((name) => (
              <li key={name}>
                <a
                  className={styles["socials-link"]}
                  href={`https://${name}.com`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                >
                  <svg className={styles.icon}>
                    <use href={`${sprite}#icon-${name}`} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Resource</h4>
          <ul>
            <li className={styles["nav-link"]}>
              <a href="#">About Us</a>
            </li>
            <li className={styles["nav-link"]}>
              <a href="#">Careers</a>
            </li>
            <li className={styles["nav-link"]}>
              <a href="#">Contact</a>
            </li>
            <li className={styles["nav-link"]}>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Legal Stuff</h4>
          <ul>
            <li className={styles["nav-link"]}>
              <a href="#">Disclaimer</a>
            </li>
            <li className={styles["nav-link"]}>
              <a href="#">Privacy Policy</a>
            </li>
            <li className={styles["nav-link"]}>
              <a href="#">Terms of Service</a>
            </li>
            <li className={styles["nav-link"]}>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>

        <div className={styles.subscribe}>
          <p>Knowing you're always on the best energy deal.</p>

          <div className={styles["input-wrapper"]}>
            <svg
              className={`${styles["input-icon"]} ${
                error || locked ? styles["icon-error"] : ""
              }`}
            >
              <use href={`${sprite}#icon-mail`} />
            </svg>

            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(event) => validateEmail(event.target.value)}
              className={`${styles.input} ${
                error || locked ? styles["input-error"] : ""
              }`}
            />
          </div>

          {error && <span className={styles.error}>{error}</span>}

          {success && <span className={styles.success}>{success}</span>}

          <button
            type="button"
            className={`button ${styles["button-footer"]} ${
              locked ? styles["button-locked"] : ""
            }`}
            onClick={handleSubmit}
            disabled={locked}
          >
            Sign up Now
          </button>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Made With Love By Product All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;