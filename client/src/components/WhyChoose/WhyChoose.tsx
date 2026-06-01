import styles from "./WhyChoose.module.css";
import sprite from "../../assets/symbol-defs.svg";

const reasons = [
  {
    id: 1,
    icon: "icon-click",
    title: "Special Business",
    text: "Product helps you see how many more days you need to work to reach your financial goal for the month and year.",
    className: styles.greenIcon,
  },
  {
    id: 2,
    icon: "icon-design",
    title: "Instant Result",
    text: "Product helps you see how many more days you need to work to reach your financial goal for the month and year.",
    className: styles.blueIcon,
  },
  {
    id: 3,
    icon: "icon-heart",
    title: "Fastest way to organize",
    text: "Product helps you see how many more days you need to work to reach your financial goal for the month and year.",
    className: styles.redIcon,
  },
];

function WhyChoose() {
  return (
    <section className={styles.whyChoose}>
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>Why Choose Product?</h2>

        <ul className={styles.list}>
          {reasons.map((reason) => (
            <li className={styles.card} key={reason.id}>
              <svg
                className={`${styles.icon} ${reason.className}`}
                width="50"
                height="50"
                aria-hidden="true"
              >
                <use href={`${sprite}#${reason.icon}`} />
              </svg>

              <h3 className={styles.cardTitle}>{reason.title}</h3>

              <p className={styles.text}>{reason.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyChoose;