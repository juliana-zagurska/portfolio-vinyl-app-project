import styles from "./GenresList.module.css";
import { Section } from "../Section/index.js";
import { GenreCard } from "../GenreCard/index.js";
import { useGenreListAsync } from "../../hooks/useGenreListAsync.js";
import { Loader } from "../Loader/Loader.jsx";
import { motion } from "framer-motion";

export const GenresList = () => {
  const { data, isLoading } = useGenreListAsync();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Section
      title={"You may like"}
      link={<Section.Link to="/search">See more</Section.Link>}
    >
      <div className={styles.root}>
        <motion.div
          initial={{
            opacity: 0,
            x: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className={styles.inner}
        >
          {data.map((genre) => (
            <GenreCard key={genre.id} genre={genre} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
