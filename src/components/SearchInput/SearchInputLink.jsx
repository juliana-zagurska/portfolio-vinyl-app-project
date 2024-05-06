import PropTypes from "prop-types";
import styles from "./SearchInputLink.module.css";

export const SearchInputLink = ({ icon, label, ...props }) => {
  return (
    <a href="/search" className={styles.root} {...props}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </a>
  );
};

SearchInputLink.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
};
