import styles from "./SearchInputTab.module.css";
import PropTypes from "prop-types";

export const SearchInputTab = ({ isActive, label, ...props }) => {
  const buttonClasses = [styles.root];
  if (isActive) {
    buttonClasses.push(styles.isActive);
  }

  return (
    <button className={buttonClasses.join(" ")} {...props}>
      {label}
    </button>
  );
};

SearchInputTab.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
};
