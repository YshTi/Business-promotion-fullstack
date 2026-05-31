import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./QuickProcess.module.css";

function QuickProcess() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.quickProcess}>
      <div className={`container ${styles["quick-process-wrapper"]}`}>
        <h2 className={styles.title}>Quick & Easy Process</h2>

        <p className={styles.subtitle}>
          Do you require some help for your project: Conception workshop, prototyping, marketing strategy, landing page, UX/UI?
        </p>

        <div className={styles.processList}>
          <div className={styles.processRow}>
            <img
              src="/expert-1.jpg"
              alt="Expert for pitch"
              className={`${styles.expertImage} ${styles.expertRed}`}
            />

            <div className={styles.processBubble}>
              I can take care of your pitch
            </div>
          </div>

          <div className={`${styles.processRow} ${styles.reverse}`}>
            <div className={styles.processBubble}>
              I can design you website
            </div>

            <img
              src="/expert-2.jpg"
              alt="Expert for website design"
              className={`${styles.expertImage} ${styles.expertGreen}`}
            />
          </div>

          <div className={styles.processRow}>
            <img
              src="/expert-3.jpg"
              alt="Expert for marketing strategy"
              className={`${styles.expertImage} ${styles.expertBlue}`}
            />

            <div className={styles.processBubble}>
              I can help marketing strategy
            </div>
          </div>

          <div className={`${styles.processRow} ${styles.reverse}`}>
            <div className={styles.processBubble}>
              I can prototype your app
            </div>

            <img
              src="/expert-4.jpg"
              alt="Expert for app prototype"
              className={`${styles.expertImage} ${styles.expertPurple}`}
            />
          </div>
        </div>

        <button
          className={`button ${styles.contactExpertButton}`}
          onClick={() => setIsModalOpen(true)}
        >
          Contact our expert
        </button>
      </div>

      {isModalOpen && <ContactForm onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}

export default QuickProcess;