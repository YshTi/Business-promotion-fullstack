import sprite from "../../assets/symbol-defs.svg";
import styles from "./ProductDescription.module.css";

type ProductDescriptionProps = {
  onSignUpClick?: () => void;
};

const ProductDescription = ({ onSignUpClick }: ProductDescriptionProps) => {
  return (
    <section className={styles.product}>
      <div className={`container ${styles["prod-descr"]}`}>
        <h2 className={styles["prod-title"]}>
          Product was Built Specifically for You
        </h2>

        <div className={styles["prod-content"]}>
          <ul className={styles["prod-list"]}>
            <li className={styles["prod-item"]}>
              <div className={styles["prod-icon-wrapper"]}>
                <svg className={styles["prod-icon"]}>
                  <use href={`${sprite}#icon-click`} />
                </svg>
              </div>

              <h3 className={styles["prod-item-title"]}>First click tests</h3>

              <p className={styles["prod-item-text"]}>
                While most people enjoy casino gambling,
              </p>
            </li>

            <li className={styles["prod-item"]}>
              <div className={styles["prod-icon-wrapper"]}>
                <svg className={styles["prod-icon"]}>
                  <use href={`${sprite}#icon-design`} />
                </svg>
              </div>

              <h3 className={styles["prod-item-title"]}>Design surveys</h3>

              <p className={styles["prod-item-text"]}>
                Sports betting, lottery and bingo playing for the fun
              </p>
            </li>

            <li className={styles["prod-item"]}>
              <div className={styles["prod-icon-wrapper"]}>
                <svg className={styles["prod-icon"]}>
                  <use href={`${sprite}#icon-heart`} />
                </svg>
              </div>

              <h3 className={styles["prod-item-title"]}>Preference tests</h3>

              <p className={styles["prod-item-text"]}>
                The Myspace page defines the individual.
              </p>
            </li>

            <li className={styles["prod-item"]}>
              <div className={styles["prod-icon-wrapper"]}>
                <svg className={styles["prod-icon"]}>
                  <use href={`${sprite}#icon-time`} />
                </svg>
              </div>

              <h3 className={styles["prod-item-title"]}>
                Five second tests
              </h3>

              <p className={styles["prod-item-text"]}>
                Personal choices and the overall personality of the person.
              </p>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className={`button ${styles["prod-button"]}`}
          onClick={onSignUpClick}
        >
          SIGN UP NOW
        </button>
      </div>
    </section>
  );
};

export default ProductDescription;