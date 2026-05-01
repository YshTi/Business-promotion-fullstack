import { useState } from "react";
import styles from "./Footer.module.css";
import sprite from "../../assets/symbol-defs.svg";
import { Link } from "react-router-dom";


const Footer = () => {
  // STATE
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [locked, setLocked] = useState(false);

  // SUBMIT HANDLER
  const handleSubmit = () => {
    if (!phone || error) {
      setLocked(true); // 🔥 lock + trigger styles
      return;
    }

    // success
    console.log("Submitted:", phone);
  };

  // VALIDATION of the Phone
  const validatePhone = (value: string) => {
    const regex = /^\+?[0-9]{10,15}$/;

    setPhone(value);

    if (!value) {
      setError("");
      setLocked(false);
      return;
    }

    if (!regex.test(value)) {
      setError("Use 10-15 digits, numbers only, optional + at start");
    } else {
      setError("");
      setLocked(false); // unlock when correct
    }
  };

  return (
    <footer id="resources" className={styles.footer}>
      
      {/* TOP BLOCK */}
      <div className={styles.top}>
        
        {/* LOGO + SOCIAL */}
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
                <a className={styles["socials-link"]} href={`https://${name}.com`}>
                  <svg className={styles.icon}>
                    <use href={`${sprite}#icon-${name}`} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RESOURCE */}
        <div className={styles.column}>
          <h4>Resource</h4>
          <ul>
            <li className={styles["nav-link"]}><a href="#">About Us</a></li>
            <li className={styles["nav-link"]}><a href="#">Careers</a></li>
            <li className={styles["nav-link"]}><a href="#">Contact</a></li>
            <li className={styles["nav-link"]}><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* LEGAL */}
        <div className={styles.column}>
          <h4>Legal Stuff</h4>
          <ul>
            <li className={styles["nav-link"]}><a href="#">Disclaimer</a></li>
            <li className={styles["nav-link"]}><a href="#">Privacy Policy</a></li>
            <li className={styles["nav-link"]}><a href="#">Terms of Service</a></li>
            <li className={styles["nav-link"]}><a href="#">Cookie Policy</a></li>
          </ul>
        </div>

        {/* FORM */}
        <div className={styles.subscribe}>
          <p>knowing you're always on the best energy deal.</p>

          <div className={styles["input-wrapper"]}>
            <svg
              className={`${styles["input-icon"]} ${
                error || locked ? styles["icon-error"] : ""
              }`}
            >
              <use href={`${sprite}#icon-phone`} />
            </svg>

            <input
              type="tel"
              value={phone}
              placeholder="Enter your phone number"
              onChange={(e) => {
                setPhone(e.target.value);
                validatePhone(e.target.value);
              }}
              className={`${styles.input} ${error ? styles["input-error"] : ""}`}
            />
          </div>

          {/* ERROR MESSAGE */}
          {error && <span className={styles.error}>{error}</span>}

          <button
            className={`button ${styles["button-footer"]} ${
              locked ? styles["button-locked"] : ""
            }`}
            onClick={handleSubmit}
            disabled={locked} // disabled AFTER bad click
          >
            Sign up Now
          </button>
        </div>

      </div>

      {/* BOTTOM BLOCK */}
      <div className={styles.bottom}>
        <p>Made With Love By Product All Right Reserved</p>
      </div>

    </footer>
  );
};

export default Footer;