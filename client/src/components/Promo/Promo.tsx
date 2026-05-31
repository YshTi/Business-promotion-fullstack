import styles from "./Promo.module.css";

function Promo() {
  return (
    <section className={styles.promo}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Join 100 Companies who boost their business with Product
          </h2>

          <button className={`button button-white ${styles.button}`}>
            Get This
          </button>
        </div>

        <img
          className={styles.image}
          src="/promo-img.png"
          alt="Business analytics dashboard"
        />
      </div>
    </section>
  );
}

export default Promo;