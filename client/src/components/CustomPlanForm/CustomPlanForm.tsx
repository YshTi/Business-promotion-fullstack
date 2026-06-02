import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent, MouseEvent } from "react";
import styles from "./CustomPlanForm.module.css";

type CustomPlanFormProps = {
  onClose: () => void;
};

type CommunicationMethod = "email" | "phone" | "either";

const planOptions = [
  "More operators",
  "Advanced notifications",
  "Landing pages",
  "Team management",
  "Custom integrations",
  "Priority support",
  "Other",
];

function CustomPlanForm({ onClose }: CustomPlanFormProps) {
  const [communicationMethod, setCommunicationMethod] =
    useState<CommunicationMethod>("email");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
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
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setError("");

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleNeedChange = (need: string) => {
    setSelectedNeeds((prevNeeds) => {
      if (prevNeeds.includes(need)) {
        return prevNeeds.filter((item) => item !== need);
      }

      return [...prevNeeds, need];
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const hasEmail = formData.email.trim().length > 0;
    const hasPhone = formData.phone.trim().length > 0;

    if (!hasEmail && !hasPhone) {
      setError("Please leave at least your email or phone number.");
      return;
    }

    const payload = {
      ...formData,
      communicationMethod,
      selectedNeeds,
    };

    console.log("Custom plan request:", payload);

    // Later you can connect it to backend:
    // await fetch("http://localhost:5050/api/custom-plan", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });

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
            aria-label="Close custom plan form"
          >
            ×
          </button>

          <div className={styles.successIcon}>✓</div>

          <h2 className={styles.successTitle}>Thank you!</h2>

          <p className={styles.successText}>
            Thank you for the information. Our expert will contact you within 2
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
          aria-label="Close custom plan form"
        >
          ×
        </button>

        <p className={styles.eyebrow}>CUSTOM PLAN</p>

        <h2 className={styles.title}>Get in touch with our expert</h2>

        <p className={styles.subtitle}>
          Tell us what you need from a custom tailored plan, and we will help
          you choose the best solution.
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

          <input
            className={styles.input}
            type="text"
            name="company"
            placeholder="Company name"
            value={formData.company}
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
                  name="communicationMethod"
                  value="email"
                  checked={communicationMethod === "email"}
                  onChange={() => setCommunicationMethod("email")}
                />
                Email
              </label>

              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="communicationMethod"
                  value="phone"
                  checked={communicationMethod === "phone"}
                  onChange={() => setCommunicationMethod("phone")}
                />
                Phone
              </label>

              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="communicationMethod"
                  value="either"
                  checked={communicationMethod === "either"}
                  onChange={() => setCommunicationMethod("either")}
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

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>
              What do you need it for?
            </legend>

            <div className={styles.checkboxGrid}>
              {planOptions.map((option) => (
                <label className={styles.checkboxLabel} key={option}>
                  <input
                    type="checkbox"
                    checked={selectedNeeds.includes(option)}
                    onChange={() => handleNeedChange(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Tell us about your custom tailored plan"
            value={formData.message}
            onChange={handleChange}
          />

          {error && <p className={styles.error}>{error}</p>}

          <button className={`button ${styles.submitButton}`} type="submit">
            Send request
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomPlanForm;