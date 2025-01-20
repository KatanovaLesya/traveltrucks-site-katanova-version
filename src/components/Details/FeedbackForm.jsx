import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./FeedbackForm.module.css";

const FeedbackForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      date: "",
      comment: "",
    });
  };

  return (
    <form className={styles.feedbackForm} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Book your campervan now</h2>
      <p className={styles.subheading}>
        Stay connected! We are always ready to help you.
      </p>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="date">Booking date*</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Your message..."
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Send
      </button>
    </form>
  );
};

FeedbackForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FeedbackForm;
