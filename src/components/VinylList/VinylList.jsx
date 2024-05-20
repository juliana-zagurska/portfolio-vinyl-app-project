import styles from "./VinylList.module.css";
import { Section } from "../Section/index.js";
import PropTypes from "prop-types";

export const VinylList = ({ children, isOnlyCards }) => {
  if (isOnlyCards) {
    return <div className={styles.root}>{children}</div>;
  }

  return (
    <Section
      title={"New in stock"}
      link={<Section.Link to="/search">See more</Section.Link>}
    >
      <div className={styles.root}>{children}</div>
    </Section>
  );
};

VinylList.propTypes = {
  children: PropTypes.node,
  isOnlyCards: PropTypes.bool,
};
