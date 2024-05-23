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
        <div className={styles.vinylCard__cover}>
          <button
            className={styles.faHeart}
            onClick={() => onWishlistToggle(vinyl.id)}
          >
            <HeartIcon isActive={inWishlist} color={"#fff"}></HeartIcon>
          </button>
          <img
            src={vinyl.image}
            alt={vinyl.name}
            className={styles.retinaImage}
          />
        </div>
        <div className={styles.vinylCard__content}>
          <div className={styles.itemHeader}>
            <h1 className={styles.vinylCard__title}>{vinyl.name}</h1>
            <h2 className={styles.vinylCard__artist}>{vinyl.artist}</h2>
            <p>
              Name: <span>{vinyl.title}</span>
            </p>
          </div>
          <div className={styles.vinylCard__release}>
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
              Country: <span>{vinyl.country.title}</span>
            </p>
          </div>
        </div>
        <div className={styles.vinylCard__action}>
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
