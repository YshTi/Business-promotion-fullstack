import styles from "./PricingTable.module.css";
import type { PricingPlan } from "../../types/pricing";

type PricingTableProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
  variant?: "home" | "pricingPage";
};

const defaultPlans: PricingPlan[] = [
  {
    id: 1,
    title: "Free",
    description: "Brief price description",
    price: 0,
    period: "Per / month",
    features: ["Only 2 Operators", "Notifications", "Landing Pages"],
  },
  {
    id: 2,
    title: "Standard",
    description: "Brief price description",
    price: 5,
    period: "Per / month",
    features: ["5+ Operators", "Notifications", "Landing Pages"],
    isPopular: true,
  },
  {
    id: 3,
    title: "Premium",
    description: "Brief price description",
    price: 10,
    period: "Per / month",
    features: ["10+ Operators", "Notifications", "Landing Pages"],
  },
];

function PricingTable({
  eyebrow,
  title = "Price Table",
  subtitle = "We offer competitive price",
  plans = defaultPlans,
  variant = "home",
}: PricingTableProps) {
  return (
    <section
      className={`${styles.pricing} ${
        variant === "pricingPage" ? styles.pricingPage : ""
      }`}
    >
      <div className={`container ${styles.wrapper}`}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}

        <h2 className={styles.title}>{title}</h2>

        <p className={styles.subtitle}>{subtitle}</p>

        <ul className={styles.list}>
          {plans.map((plan) => (
            <li
              className={`${styles.card} ${
                plan.isPopular ? styles.highlighted : ""
              }`}
              key={plan.id}
            >
              <h3 className={styles.planName}>{plan.title}</h3>

              <p className={styles.description}>{plan.description}</p>

              <div className={styles.priceBox}>
                <span className={styles.price}>{plan.price}</span>

                <div className={styles.priceInfo}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
              </div>

              <ul className={styles.features}>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <button
                className={`button ${
                  plan.isPopular ? "button-white" : ""
                } ${styles.button}`}
              >
                Order Now
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PricingTable;