import { useState } from "react";
import styles from "./Faq.module.css";

const faqItems = [
  {
    id: 1,
    question: "What are my payment options?",
    answer:
      "You can choose a monthly or yearly subscription plan. Payments can be made by card, and your selected plan can be changed later from your account settings.",
  },
  {
    id: 2,
    question: "How can I invite collaborator to platform?",
    answer:
      "After creating your account, you can invite collaborators by email. They will receive an invitation link and will be able to join your workspace after confirming their account.",
  },
  {
    id: 3,
    question: "Can I upgrade my plan?",
    answer:
      "Yes. You can upgrade your plan at any time. New features will become available immediately, and your billing will be adjusted according to the selected plan.",
  },
  {
    id: 4,
    question: "Can I cancel my plan at anytime?",
    answer:
      "Yes. You can cancel your plan whenever you need. Your account will remain active until the end of the current billing period.",
  },
];

function Faq() {
  const [openId, setOpenId] = useState<number | null>(2);

  const toggleItem = (id: number) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className={styles.faq}>
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.title}>Frequently asked question</h2>

        <p className={styles.subtitle}>
          Something is not clear? You need help? Check our FAQ section
        </p>

        <ul className={styles.list}>
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <li className={styles.item} key={item.id}>
                <button
                    type="button"
                    className={`${styles.questionButton} ${
                        isOpen ? styles.questionButtonOpen : ""
                    }`}
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                >
                  <span
                    className={`${styles.icon} ${
                      isOpen ? styles.iconOpen : ""
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>

                  <span className={styles.question}>{item.question}</span>
                </button>

                {isOpen && <p className={styles.answer}>{item.answer}</p>}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Faq;