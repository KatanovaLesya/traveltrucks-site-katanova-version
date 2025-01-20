import PropTypes from "prop-types";
import styles from "./CamperDetails.module.css";


const Reviews = ({ reviews }) => (
  <div className={styles.reviewsContainer}>
    {reviews.length > 0 ? (
      <ul className={styles.reviewsList}>
        {reviews.map((review, index) => (
          <li key={index} className={styles.reviewItem}>
            {/* Генерація аватарки */}
            <span className={styles.reviewAuthor}>
              {review.reviewer_name.charAt(0)}
            </span>
            <div className={styles.reviewContent}>
              <div className={styles.reviewHeader}>
                <span>{review.reviewer_name}</span>
                <span>{'★'.repeat(review.reviewer_rating)}</span>
              </div>
              <p className={styles.reviewText}>{review.comment}</p>
            </div>
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
