import { useState } from "react";
import type { ChangeEvent, SyntheticEvent } from "react";
import "./ContactForm.module.css";

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
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Request sent successfully!");

        setFormData({
          name: "",
          email: "",
          projectType: "",
          message: "",
        });

        setImage(null);

        setTimeout(() => {
          onClose();
        }, 1000);
      } else {
        setStatus(result.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Could not connect to backend.");
      console.error(error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="contact-modal">
        <button className="modal-close-button" onClick={onClose}>
          ×
        </button>

        <h2>Contact our expert</h2>

        <p className="contact-modal-subtitle">
          Tell us about your project and our expert will contact you.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="projectType"
            placeholder="Project type"
            value={formData.projectType}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell us about your project"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <input type="file" accept="image/*" onChange={handleImageChange} />

          <button type="submit" className="contact-submit-button">
            Send request
          </button>

          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;