import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./Feedback.module.css";

type FeedbackItem = {
  _id: string;
  rating: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
};

function Feedback() {
  const [feedback, setFeedback] = useState<FeedbackItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch("/api/feedback");
        const result = await response.json();

        if (result.success) {
          setFeedback(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch feedback:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const renderCard = (item: FeedbackItem) => (
    <article className={styles.card}>
      <div className={styles.stars}>{renderStars(item.rating)}</div>

      <p className={styles.text}>{item.text}</p>

      <div className={styles.person}>
        <img className={styles.avatar} src={item.avatar} alt={item.name} />

        <div>
          <h3 className={styles.name}>{item.name}</h3>
          <p className={styles.role}>{item.role}</p>
        </div>
      </div>
    </article>
  );

  return (
    <section className={styles.feedback}>
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>What Clients Say</h2>

        <p className={styles.subtitle}>
          Problems trying to resolve the conflict between the two major realms of
          Classical physics: Newtonian mechanics
        </p>

        {loading ? (
          <p className={styles.loading}>Loading feedback...</p>
        ) : (
          <>
            <ul className={styles.mobileList}>
              {feedback.map((item) => (
                <li key={item._id}>{renderCard(item)}</li>
              ))}
            </ul>

            <Swiper
              className={styles.swiper}
              modules={[Keyboard, Pagination, A11y]}
              pagination={{ clickable: true }}
              keyboard={{
                enabled: true,
                onlyInViewport: true,
              }}
              grabCursor={true}
              simulateTouch={true}
              spaceBetween={32}
              slidesPerView={2}
              breakpoints={{
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 64,
                },
              }}
            >
              {feedback.map((item) => (
                <SwiperSlide key={item._id} tabIndex={0}>
                  {renderCard(item)}
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </section>
  );
}

export default Feedback;