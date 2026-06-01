import styles from "./HowProductWorks.module.css";

const steps = [
  {
    id: 1,
    step: "STEP 1",
    title: "Apply for a product",
    text: "Completing our easy step-by-step application form gives you access to multiple business with multiple products. We analyse your business through our proprietary credit analysis technology.",
    image: "/mac-1.svg",
    alt: "Application dashboard on laptop",
  },
  {
    id: 2,
    step: "STEP 2",
    title: "Pay fully refundable",
    text: "Product will contact you instantly to receive payment of the Application Fee. If no offer of product is available, your fee will be fully refunded.",
    image: "/mac-2.svg",
    alt: "Product dashboard on laptop",
  },
  {
    id: 3,
    step: "STEP 3",
    title: "Completion",
    text: "Product will continue to liaise between borrower and manager to process and complete a quick and efficient settlement.",
    image: "/mac-3.svg",
    alt: "Analytics dashboard on laptop",
  },
];

function HowProductWorks() {
  return (
    <section className={styles.howWorks}>
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>How Product Work?</h2>

        <ul className={styles.list}>
          {steps.map((item, index) => (
            <li
              className={`${styles.item} ${
                index % 2 !== 0 ? styles.reversed : ""
              }`}
              key={item.id}
            >
              <img className={styles.image} src={item.image} alt={item.alt} />

              <div className={styles.content}>
                <p className={styles.step}>{item.step}</p>

                <h3 className={styles.itemTitle}>{item.title}</h3>

                <p className={styles.text}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <button className={`button ${styles.button}`}>Get in touch with us</button>
      </div>
    </section>
  );
}

export default HowProductWorks;