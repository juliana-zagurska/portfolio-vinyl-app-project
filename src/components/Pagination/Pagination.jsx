import PropTypes from "prop-types";
import styles from "./Pagination.module.css";

export const Pagination = ({ pagesCount, onPageChange }) => {
  return (
    <div className={styles.pagination}>
      {Array.from({ length: pagesCount }).map((_, index) => (
        <div
          key={index}
          className={styles.paginationButton}
          onClick={() => onPageChange(index + 1)}
          role="button"
          tabIndex={0}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  pagesCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
