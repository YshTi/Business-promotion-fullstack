import styles from "./Enterprise.module.css";

function Enterprise() {
  return (
    <section className={styles.enterprise}>
      <div className={`container ${styles.wrapper}`}>
        <p className={styles.eyebrow}>ENTERPRISE</p>

        <h2 className={styles.title}>
          Are you interested in a custom tailored plan?
        </h2>

        <p className={styles.text}>
          Product is a set of advanced features for really large teams with
          projects.
        </p>

        <button className={`button ${styles.button}`}>
          Get in touch with us
        </button>
      </div>
    </section>
  );
}

export default Enterprise;