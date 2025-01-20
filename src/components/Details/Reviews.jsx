import PropTypes from "prop-types";
import styles from "./CamperDetails.module.css";

const Reviews = ({ reviews }) => (
  <div className={styles.reviewsContainer}>
    <h2 className={styles.heading}>User Reviews</h2>
    {reviews.length > 0 ? (
      <ul className={styles.reviewsList}>
        {reviews.map((review, index) => (
          <li key={index} className={styles.reviewItem}>
            <p className={styles.reviewText}>{review.comment}</p>
            <span className={styles.reviewAuthor}>
              - {review.reviewer_name} ({review.reviewer_rating}★)
            </span>
          </li>
        ))}
      </ul>
    ) : (
      <p className={styles.noReviews}>No reviews available for this camper.</p>
    )}
  </div>
);

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string.isRequired,
      reviewer_name: PropTypes.string.isRequired,
      reviewer_rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Reviews;
