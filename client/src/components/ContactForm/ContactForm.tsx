import { useEffect, useState } from "react";
import type { ChangeEvent, SyntheticEvent, MouseEvent } from "react";
import styles from "./ContactForm.module.css";

type ContactFormProps = {
  onClose: () => void;
};

function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [status, setStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
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
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("projectType", formData.projectType);
    data.append("message", formData.message);

    if (image) {
      data.append("image", image);
    }

    try {
      const response = await fetch("http://localhost:5050/api/contact", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setStatus("");

        setFormData({
          name: "",
          email: "",
          projectType: "",
          message: "",
        });

        setImage(null);
      } else {
        setStatus(result.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Could not connect to backend.");
      console.error(error);
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={handleModalClick}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close contact form"
        >
          ×
        </button>

        {isSubmitted ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>✓</div>

            <h2 className={styles.successTitle}>Thank you!</h2>

            <p className={styles.successText}>
              Our expert will contact you within
              2 working days.
            </p>

            <button
              type="button"
              className={`button ${styles.successButton}`}
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className={styles.title}>Contact our expert</h2>

            <p className={styles.subtitle}>
              Tell us about your project and our expert will contact you.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                className={styles.input}
                type="text"
                name="projectType"
                placeholder="Project type"
                value={formData.projectType}
                onChange={handleChange}
              />

              <textarea
                className={styles.textarea}
                name="message"
                placeholder="Tell us about your project"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <label className={styles.fileLabel}>
                Upload files
                <input
                  className={styles.fileInput}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>

              {image && <p className={styles.fileName}>{image.name}</p>}

              <button
                className={`button ${styles.submitButton}`}
                type="submit"
              >
                Send request
              </button>

              {status && <p className={styles.status}>{status}</p>}
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ContactForm;