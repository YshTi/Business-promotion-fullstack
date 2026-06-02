import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent, MouseEvent } from "react";
import styles from "./QuestionForm.module.css";

type QuestionFormProps = {
  onClose: () => void;
};

type ContactMethod = "email" | "phone" | "either";

function QuestionForm({ onClose }: QuestionFormProps) {
  const [contactMethod, setContactMethod] = useState<ContactMethod>("email");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    questionTopic: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [onClose]);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setError("");

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const hasEmail = formData.email.trim().length > 0;
    const hasPhone = formData.phone.trim().length > 0;

    if (!hasEmail && !hasPhone) {
      setError("Please leave at least your email or phone number.");
      return;
    }

    const payload = {
      ...formData,
      contactMethod,
    };

    console.log("Question request:", payload);

    setIsSent(true);
  };

  if (isSent) {
    return (
      <div className={styles.overlay} onClick={handleOverlayClick}>
        <div className={styles.successModal} onClick={handleModalClick}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close question form"
          >
            ×
          </button>

          <div className={styles.successIcon}>✓</div>

          <h2 className={styles.successTitle}>Thank you!</h2>

          <p className={styles.successText}>
            Thank you for your question. Our expert will contact you within 2
            working days.
          </p>

          <button
            type="button"
            className={`button ${styles.successButton}`}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={handleModalClick}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close question form"
        >
          ×
        </button>

        <p className={styles.eyebrow}>ASK OUR EXPERT</p>

        <h2 className={styles.title}>Have a question?</h2>

        <p className={styles.subtitle}>
          Tell us what you would like to know, and our expert will contact you.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>
              Preferred way of communication
            </legend>

            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="contactMethod"
                  checked={contactMethod === "email"}
                  onChange={() => setContactMethod("email")}
                />
                Email
              </label>

              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="contactMethod"
                  checked={contactMethod === "phone"}
                  onChange={() => setContactMethod("phone")}
                />
                Phone
              </label>

              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="contactMethod"
                  checked={contactMethod === "either"}
                  onChange={() => setContactMethod("either")}
                />
                Either
              </label>
            </div>
          </fieldset>

          <div className={styles.contactGrid}>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              className={styles.input}
              type="tel"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <select
            className={styles.select}
            name="questionTopic"
            value={formData.questionTopic}
            onChange={handleChange}
          >
            <option value="">What is your question about?</option>
            <option value="pricing">Pricing</option>
            <option value="product-workflow">Product workflow</option>
            <option value="operators">Operators and team access</option>
            <option value="refund">Payment and refund</option>
            <option value="support">Support</option>
            <option value="other">Other</option>
          </select>

          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Write your question here"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {error && <p className={styles.error}>{error}</p>}

          <button className={`button ${styles.submitButton}`} type="submit">
            Send question
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuestionForm;