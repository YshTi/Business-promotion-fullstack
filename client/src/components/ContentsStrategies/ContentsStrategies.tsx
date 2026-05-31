import styles from "./ContentsStrategies.module.css";

const articles = [
  {
    id: 1,
    image1x: "/positive-thinking@1x.png",
    image2x: "/positive-thinking@2x.png",
    author: "Wahid Ari",
    date: "03 March 2019",
    title: "Increasing Prosperity With Positive Thinking",
  },
  {
    id: 2,
    image1x: "/motivation@1x.png",
    image2x: "/motivation@2x.png",
    author: "Wahid Ari",
    date: "03 March 2019",
    title: "Motivation Is The First Step To Success",
    featured: true,
  },
  {
    id: 3,
    image1x: "/steps@1x.png",
    image2x: "/steps@2x.png",
    author: "Wahid Ari",
    date: "03 March 2019",
    title: "Success Steps For Your Personal Or Business",
  },
];

function ContentsStrategies() {
  return (
    <section className={styles.contents}>
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>Contents Strategies</h2>

        <p className={styles.subtitle}>
          We focus on ergonomics and meeting you where you work. It&apos;s only a
          keystroke away.
        </p>

        <ul className={styles.list}>
          {articles.map((article) => (
            <li className={styles.card} key={article.id}>
              <img
                className={styles.image}
                src={article.image1x}
                srcSet={`${article.image1x} 1x, ${article.image2x} 2x`}
                alt={article.title}
              />

              <div className={styles.cardBody}>
                <p className={styles.meta}>
                  By <span>{article.author}</span> | {article.date}
                </p>

                <h3
                  className={`${styles.cardTitle} ${
                    article.featured ? styles.featuredTitle : ""
                  }`}
                >
                  {article.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ContentsStrategies;