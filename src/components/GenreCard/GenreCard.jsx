import PropTypes from "prop-types";
import styles from "./GenreCard.module.css";
import { getRandomInt } from "./utils.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const GenreCard = ({ genre }) => {
  const [images] = useState(() =>
    genre.images.map((image) => {
      const rotate = getRandomInt(-20, 20);
      const hoverRotate = getRandomInt(rotate - 3, rotate + 3);

      return {
        image,
        translateX: getRandomInt(-40, 10),
        translateY: getRandomInt(-10, 20),
        rotate,
        hoverRotate,
      };
    })
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Link
        to={`/search/results?genres=${genre.id}`}
        className={styles.root}
        style={{
          backgroundColor: genre.color,
          color: genre.textTheme === "dark" ? "#000" : "#fff",
        }}
      >
        <h4 className={styles.title}>{genre.title}</h4>

        {images.map((image, index) => {
          return (
            <div
              key={image.image}
              className={styles.cover}
              style={{
                "--translate-x": `${image.translateX}px`,
                "--translate-y": `${image.translateY}px`,
                "--rotate": `${image.rotate}deg`,
                "--hover-rotate": `${image.hoverRotate}deg`,
              }}
            >
              <img src={image.image} alt={`${genre.name}-${index + 1}`} />
            </div>
          );
        })}
      </Link>
    </motion.div>
  );
};

GenreCard.propTypes = {
  genre: PropTypes.object.isRequired,
};
