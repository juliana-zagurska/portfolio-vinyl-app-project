import PropTypes from "prop-types";
import styles from "./VinylCard.module.css";
import { HeartIcon } from "../Icons/HeartIcon.jsx";
import { CollectionButton } from "../CollectionButton/CollectionButton.jsx";
import { motion } from "framer-motion";

export const VinylCard = ({
  inCollection,
  inWishlist,
  vinyl,
  onClick,
  onCollectionToggle,
  onWishlistToggle,
}) => {
  return (
    <motion.div
      onClick={onClick}
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
      }}
      transition={{
        duration: 1,
      }}
      className={styles.item}
      key={vinyl.id}
    >
      <div className={styles.vinylCard}>
        <div className={styles.vinylCard__cover}>
          <motion.button
            animate={{
              scale: inWishlist ? 1.2 : 0.9,
            }}
            button
            className={styles.faHeart}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onWishlistToggle(vinyl.id);
            }}
          >
            <HeartIcon isActive={inWishlist} color={"#fff"}></HeartIcon>
          </motion.button>
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
          <motion.div
            whileTap={{
              scale: 0.5,
            }}
            transition={{
              duration: 0.1,
            }}
            className={styles.collectionButton}
          >
            <CollectionButton
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onCollectionToggle(vinyl.id);
              }}
              isActive={inCollection}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

VinylCard.propTypes = {
  inCollection: PropTypes.bool.isRequired,
  inWishlist: PropTypes.bool.isRequired,
  vinyl: PropTypes.object.isRequired,
  onCollectionToggle: PropTypes.func.isRequired,
  onWishlistToggle: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};
