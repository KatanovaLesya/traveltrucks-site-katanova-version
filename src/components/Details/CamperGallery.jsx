import { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./CamperDetails.module.css";

const CamperGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

    return (
        <div className={styles.galleryContainer}>
            <div className={styles.galleryWrapper}>
                <div className={styles.gallery}>
                    {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.thumb}
                        alt={`Gallery ${index}`}
                        className={styles.galleryImage}
                        onClick={() => openImage(image.original)}
                    />
                    ))}
                </div>
            </div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeImage}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged view" className={styles.modalImage} />
            <button className={styles.closeButton} onClick={closeImage}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
};

CamperGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      thumb: PropTypes.string.isRequired,
      original: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CamperGallery;
