import PropTypes from "prop-types";
import styles from "./VinylCard.module.css";
import { HeartIcon } from "../Icons/HeartIcon.jsx";

export const VinylCard = ({
  inCollection,
  inWishlist,
  vinyl,
  onCollectionToggle,
  onWishlistToggle,
}) => {
  return (
    <div className={styles.item} key={vinyl.id}>
      <div className={styles.vinylCard}>
        <div className="vinyl-card__cover">
          <button
            className="fas fa-heart"
            onClick={() => onWishlistToggle(vinyl.id)}
          >
            <HeartIcon isActive={inWishlist} color={"#fff"}></HeartIcon>
          </button>
          <img src={vinyl.image.x1} alt={vinyl.name} className="retina-image" />
        </div>
        <div className="vinyl-card__content">
          <div className="item-header">
            <h1 className="vinyl-card__title">{vinyl.name}</h1>
            <h2 className="vinyl-card__artist">{vinyl.artist}</h2>
            <p>
              Genre: <span>{vinyl.title}</span>
            </p>
          </div>
          <div className="vinyl-card__release">
            <p>
              Year: <span>{vinyl.year}</span>
            </p>
            <p>
              Style:
              {vinyl.styles.map((style) => (
                <span key={style}>{style}</span>
              ))}
            </p>
            <p>
              Country: <span>{vinyl.country}</span>
            </p>
          </div>
        </div>
        <div className="vinyl-card__action">
          <button
            className={
              inCollection
                ? "button--active add-button"
                : "add-button--default add-button"
            }
            onClick={() => onCollectionToggle(vinyl.id)}
          >
            <span className="button__label">
              {inCollection ? "Added" : "Add"}
            </span>
            <span className="button__icon">
              {inCollection ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 -960 960 960"
                >
                  <path d="M378-258q-6 0-11-2t-10-7L176-448q-9-9-9-22t9-22q9-9 21-9t21 9l160 160 363-363q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5L399-267q-5 5-10 7t-11 2Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 -960 960 960"
                >
                  <path d="M479.825-200Q467-200 458.5-208.625T450-230v-220H230q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230-510h220v-220q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-730v220h220q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T730-450H510v220q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Z" />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

VinylCard.propTypes = {
  inCollection: PropTypes.bool.isRequired,
  inWishlist: PropTypes.bool.isRequired,
  vinyl: PropTypes.object.isRequired,
  onCollectionToggle: PropTypes.func.isRequired,
  onWishlistToggle: PropTypes.func.isRequired,
};
