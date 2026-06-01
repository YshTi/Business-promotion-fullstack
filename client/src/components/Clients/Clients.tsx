import styles from "./Clients.module.css";
import sprite from "../../assets/symbol-defs.svg";

const clients = [
  {
    id: 1,
    name: "Airbnb",
    icon: "icon-airbnb",
    className: styles.airbnb,
  },
  {
    id: 2,
    name: "Google",
    icon: "icon-google",
    className: styles.google,
  },
  {
    id: 3,
    name: "Microsoft",
    icon: "icon-microsoft",
    className: styles.microsoft,
  },
  {
    id: 4,
    name: "FedEx",
    icon: "icon-fedex",
    className: styles.fedex,
  },
];

function Clients() {
  return (
    <section className={styles.clients}>
      <div className={`container ${styles.wrapper}`}>
        <h1 className={styles.title}>Our Clients</h1>

        <ul className={styles.list}>
          {clients.map((client) => (
            <li className={styles.item} key={client.id}>
              <svg
                className={`${styles.logo} ${client.className}`}
                aria-label={client.name}
                role="img"
              >
                <use href={`${sprite}#${client.icon}`} />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Clients;