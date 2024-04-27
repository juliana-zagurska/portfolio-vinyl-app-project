import PropTypes from "prop-types";
import styles from "./VinylCard.module.css";
import { HeartIcon } from "../Icons/HeartIcon.jsx";
import { CollectionButton } from "../CollectionButton/CollectionButton.jsx";

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
          <div className={styles.collectionButton}>
            <CollectionButton
              onClick={() => onCollectionToggle(vinyl.id)}
              isActive={inCollection}
            />
          </div>
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
