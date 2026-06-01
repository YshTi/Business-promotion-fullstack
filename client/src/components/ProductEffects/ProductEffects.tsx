import styles from "./ProductEffects.module.css";
import sprite from "../../assets/symbol-defs.svg";

const effects = [
  {
    id: 1,
    icon: "icon-entrepreneur",
    title: "Entrepreneur",
    text: "Product is a great way to help medium and small enterprise owners achieve their goals",
  },
  {
    id: 2,
    icon: "icon-accountants",
    title: "Accountants",
    text: "Whether you are working on contract with clients, or on other key accounting documents, Product is for you",
  },
  {
    id: 3,
    icon: "icon-universities",
    title: "Universities",
    text: "Organize university projects and have documents easily graded online with Product",
  },
];

function ProductEffects() {
  return (
    <section className={styles.effects}>
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>
          Product is being used with great effects alongside:
        </h2>

        <div className={styles.content}>
          <picture className={styles.picture}>
            <source
              media="(min-width: 768px)"
              srcSet="/product-desktop-img.svg"
            />

            <img
              className={styles.image}
              src="/product-img.svg"
              alt="Product dashboard illustration"
            />
          </picture>

          <ul className={styles.list}>
            {effects.map((item) => (
              <li className={styles.item} key={item.id}>
                <div className={styles.itemHeader}>
                  <span className={styles.iconWrapper}>
                    <svg className={styles.icon} width="24" height="24">
                      <use href={`${sprite}#${item.icon}`} />
                    </svg>
                  </span>

                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </div>

                <p className={styles.itemText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductEffects;