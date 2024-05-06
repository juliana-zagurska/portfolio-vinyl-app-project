import PropTypes from "prop-types";
import styles from "./SearchInputVinylOption.module.css";

export const SearchInputVinylOption = ({ vinyl, ...props }) => {
  return (
    <div key={vinyl.id} className={styles.root}>
      <div>
        <img className={styles.image} src={vinyl.image.normal} alt="" />
      </div>
      <a href={`/vinyl/${vinyl.id}`} className={styles.content} {...props}>
        <h4 className={styles.title}>{vinyl.title}</h4>
        <p className={styles.artist}>{vinyl.artist}</p>
      </a>
    </div>
  );
};

SearchInputVinylOption.propTypes = {
  vinyl: PropTypes.object.isRequired,
};
