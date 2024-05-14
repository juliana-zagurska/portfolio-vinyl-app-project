import PropTypes from "prop-types";
import styles from "./Section.module.css";
import { SectionLink } from "./SectionLink.jsx";

const Section = ({ children, title, link }) => {
  return (
    <section className={styles.root}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>

        {link}
      </div>

      <div>{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.node,
  children: PropTypes.node,
};

Section.Link = SectionLink;

export { Section };
