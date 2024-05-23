import styles from "./GenresList.module.css";
import { Section } from "../Section/index.js";
import { GenreCard } from "../GenreCard/index.js";
import { useGenreListAsync } from "../../hooks/useGenreListAsync.js";
import { Loader } from "../Loader/Loader.jsx";

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
        <div className={styles.inner}>
          {data.map((genre) => (
            <GenreCard key={genre.id} genre={genre} />
          ))}
        </div>
      </div>
    </Section>
  );
};
