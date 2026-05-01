import sprite from "../../assets/symbol-defs.svg";
import styles from "./Hero.module.css";
import heroImg from "../../../public/hero-img.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles["hero-content"]}`}>

        <img src={heroImg} alt="Hero" className={styles["hero-image"]} />

        <div className={styles["hero-fill"]}>
          <h1 className={styles["hero-title"]}>
            Work at the speed of thought
          </h1>

          <p className={styles["hero-text"]}>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>

          <div className={styles["hero-buttons"]}>
            <button className={`button ${styles["button-start"]}`}>
              Get started
            </button>
            <a href="https://www.youtube.com/" className={styles["video-link"]}>
              <svg className={styles["play-icon"]}>
                <use href={`${sprite}#icon-play`} />
              </svg>
              Watch the Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;