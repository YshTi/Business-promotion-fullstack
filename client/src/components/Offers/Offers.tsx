import styles from "./Offers.module.css";

const offers = [
  {
    id: 1,
    image: "/activity.svg",
    title: "Business",
    items: ["Cash Flow", "Asset Backed", "Receivables Finance"],
  },
  {
    id: 2,
    image: "/chart.svg",
    title: "Enterprise",
    items: ["Site Acquisition", "Bridge", "Development Financing"],
  },
];

function ReceivedOffers() {
  return (
    <section className={styles.offers}>
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>
          Join thousand of other who have already received offers
        </h2>

        <ul className={styles.list}>
          {offers.map((offer) => (
            <li className={styles.card} key={offer.id}>
              <div className={styles.iconCircle}>
                <img className={styles.icon} src={offer.image} alt="" />
              </div>

              <h3 className={styles.cardTitle}>{offer.title}</h3>

              <ul className={styles.features}>
                {offer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <a className={styles.link} href="#resources">
                Find the best business product
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ReceivedOffers;