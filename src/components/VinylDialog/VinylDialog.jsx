import PropTypes from "prop-types";
import { useVinylByIdAsync } from "../../hooks/useVinylByIdAsync";
import styles from "./VinylDialog.module.css";
import { IconButton } from "../IconButton/index.js";
import { CollectionButton } from "../CollectionButton/index.js";
import { HeartIcon } from "../Icons/HeartIcon.jsx";
import { CloseIcon } from "../Icons/CloseIcon.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { Portal } from "react-portal";
import { Loader } from "../Loader/Loader.jsx";
import { useEffect, useState } from "react";

export function VinylDialog({
  vinylId,
  inWishlist,
  inCollection,
  onWishlistToggle,
  onCollectionToggle,
  onClose,
}) {
  const { data: vinyl, isLoading } = useVinylByIdAsync(vinylId);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (vinylId) {
      setIsOpened(true);
    }
  }, [vinylId]);

  const handleClose = () => {
    setIsOpened(false);
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Portal>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            className={styles.root}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5 }}
            onAnimationComplete={() => !isOpened && onClose()}
          >
            {isLoading ? (
              <motion.div
                className={styles.loader}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Loader />
              </motion.div>
            ) : (
              <AnimatePresence>
                {vinyl && (
                  <motion.div
                    className={styles.modal}
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.5 }}
                  >
                    <div className={styles.closeButton}>
                      <IconButton
                        variant="white"
                        icon={<CloseIcon size={24} />}
                        onClick={handleClose}
                      />
                    </div>
                    <article className={styles.content}>
                      <header>
                        <h4 className={styles.title}>{vinyl.title}</h4>
                        <div className={styles.artist}>{vinyl.artist}</div>
                      </header>
                      <div className={styles.cover}>
                        <div className={styles.coverActions}>
                          <IconButton
                            icon={<HeartIcon isActive={inWishlist} />}
                            onClick={(e) => {
                              e.preventDefault();
                              onWishlistToggle(vinyl);
                            }}
                            variant="white"
                          />
                        </div>
                        <img
                          className={styles.coverImage}
                          src={vinyl.image}
                          alt=""
                        />
                      </div>
                      <div className={styles.content}>
                        <div className={styles.releaseRow}>
                          <div className={styles.release}>
                            <span>
                              {vinyl.countries
                                .map((country) => country.title)
                                .join(" / ")}
                            </span>
                            <span>
                              {vinyl.releaseDate.toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div className={styles.genresRow}>
                          <div className={styles.genres}>
                            {vinyl.genres.map((genre, index) => (
                              <span
                                key={genre.id || index}
                                style={{
                                  backgroundColor: genre.color,
                                  color:
                                    genre.textTheme === "dark"
                                      ? "#000"
                                      : "#fff",
                                }}
                              >
                                {genre.title}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className={styles.stylesRow}>
                          <div className={styles.styles}>
                            {vinyl.styles.map((style, index) => (
                              <span key={style.name || index}>{style}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className={styles.action}>
                        <CollectionButton
                          isActive={inCollection}
                          onClick={() => onCollectionToggle(vinyl)}
                        />
                      </div>
                    </article>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}

VinylDialog.propTypes = {
  vinylId: PropTypes.number,
  inWishlist: PropTypes.bool,
  inCollection: PropTypes.bool,
  onWishlistToggle: PropTypes.func,
  onCollectionToggle: PropTypes.func,
  onClose: PropTypes.func,
};
