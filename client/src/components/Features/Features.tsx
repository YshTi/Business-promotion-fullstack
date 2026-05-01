import styles from "./Features.module.css";
import sprite from "../../assets/symbol-defs.svg";
import FeaturesManagement from "../../../public/management-img.png";
import FeaturesSupport from "../../../public/support-img.png";
import FeaturesCollab from "../../../public/collaboration-img.png";

const Features = () => {
  return (
    <section className={styles.features}>
        <div className={`container ${styles["features-wrapper"]}`}>
            <ul className={styles["features-list"]}>
                  <li className={`${styles["features-item"]} ${styles.reverse}`}>
                    <img src={FeaturesManagement} alt="Features Management" className={styles["features-image"]} />
                    <div className={styles["features-fill"]}>
                        <h4 className={styles["features-overline"]}>Effortless Validation for</h4>
                        <h3 className={styles["features-title"]}>Management</h3>
                        <p className={styles["features-text"]}>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                        <h5 className={styles["features-label"]}>Accessory makers</h5>
                        <p className={styles["features-text"]}>While most people enjoy casino gambling, sports betting, lottery and</p>
                        <h5 className={styles["features-label"]}>Alterationists</h5>
                        <p className={`${styles["features-text"]} ${styles["ft-lch"]}`}>If you are looking for a new way to promote your business that won't cost</p>
                    </div>
                </li>
                  <li className={styles["features-item"]}>
                    <img src={FeaturesSupport} alt="Features Support" className={styles["features-image"]} />
                    <div className={styles["features-fill"]}>
                        <h4 className={styles["features-overline"]}>Easier decision making for</h4>
                        <h3 className={styles["features-title"]}>Customer Support</h3>
                        <p className={styles["features-text"]}>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person.</p>
                        <ul className={styles["support-list"]}>
                              <li className={styles["support-item"]}>
                                <div className={`${styles["support-icon-wrapper"]} ${styles.orange}`}>
                                    <svg className={styles["support-icon"]}>
                                      <use xlinkHref={`${sprite}#icon-tick`}></use>
                                    </svg>
                                </div>
                                Never worry about overpaying for your energy again. 
                            </li>
                            <li className={styles["support-item"]}>
                                <div className={`${styles["support-icon-wrapper"]} ${styles.red}`}>
                                    <svg className={styles["support-icon"]}>
                                        <use xlinkHref={`${sprite}#icon-tick`}></use>
                                    </svg>
                                </div>
                                We will only switch you to energy companies that we trust and will treat you right.
                            </li>
                            <li className={`${styles["support-item"]} ${styles["support-lchld"]}`}>
                                <div className={`${styles["support-icon-wrapper"]} ${styles.blue}`}>
                                    <svg className={styles["support-icon"]}>
                                        <use xlinkHref={`${sprite}#icon-tick`}></use>
                                    </svg>
                                </div>
                                We track the markets daily and know where the savings are.
                            </li>
                        </ul>
                    </div>
                </li>
                  <li className={`${styles["features-item"]} ${styles.reverse}`}>
                    <img src={FeaturesCollab} alt="Features Collaboration" className={styles["features-image"]} />
                    <div className={styles["features-fill"]}>
                        <h4 className={styles["features-overline"]}>Optimisation for</h4>
                        <h3 className={styles["features-title"]}>Collaborative</h3>
                        <p className={styles["features-text"]}>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
                        <h5 className={styles["features-label"]}>Accessory makers</h5>
                        <p className={styles["features-text"]}>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                        <h5 className={styles["features-label"]}>Alterationists</h5>
                        <p className={styles["features-text"]}>If you are looking for a new way to promote your business that won't cost you more money,</p>
                    </div>
                </li>
            </ul>
        </div>
     </section>
  );
};

export default Features;
