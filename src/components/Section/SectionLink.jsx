import { Link } from "react-router-dom";
import styles from "./Section.module.css";
import PropTypes from "prop-types";

export const SectionLink = (props) => {
  return (
    <Link {...props} className={styles.link}>
      {props.children}
    </Link>
  );
};

SectionLink.propTypes = {
  children: PropTypes.node,
};
