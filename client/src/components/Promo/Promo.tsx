import styles from "./Promo.module.css";

type PromoProps = {
  onGetThisClick?: () => void;
};

function Promo({ onGetThisClick }: PromoProps) {
  return (
    <section className={styles.promo}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Join 100 Companies who boost their business with Product
          </h2>

          <button
            type="button"
            className={`button button-white ${styles.button}`}
            onClick={onGetThisClick}
          >
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