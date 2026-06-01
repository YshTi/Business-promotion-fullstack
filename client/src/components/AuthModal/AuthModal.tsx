import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent, MouseEvent } from "react";
import styles from "./AuthModal.module.css";

type AuthMode = "signIn" | "signUp";

type AuthModalProps = {
  mode: AuthMode;
  onClose: () => void;
};

function AuthModal({ mode, onClose }: AuthModalProps) {
  const [currentMode, setCurrentMode] = useState<AuthMode>(mode);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const isSignUp = currentMode === "signUp";

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(`${isSignUp ? "Sign Up" : "Sign In"} data:`, formData);

    setFormData({
      name: "",
      email: "",
      password: "",
    });

    onClose();
  };

  const handleModeChange = (newMode: AuthMode) => {
    setCurrentMode(newMode);

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={handleModalClick}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close authentication form"
        >
          ×
        </button>

        <p className={styles.eyebrow}>
          {isSignUp ? "CREATE ACCOUNT" : "WELCOME BACK"}
        </p>

        <h2 className={styles.title}>
          {isSignUp ? "Sign up to Product" : "Sign in to Product"}
        </h2>

        <p className={styles.subtitle}>
          {isSignUp
            ? "Start using Product and organize your business workflow faster."
            : "Access your account and continue managing your product workspace."}
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}

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
            type="password"
            name="password"
            placeholder="Your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button className={`button ${styles.submitButton}`} type="submit">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className={styles.switchText}>
          {isSignUp ? "Already have an account?" : "Do not have an account?"}{" "}
          <button
            type="button"
            className={styles.switchButton}
            onClick={() => handleModeChange(isSignUp ? "signIn" : "signUp")}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthModal;