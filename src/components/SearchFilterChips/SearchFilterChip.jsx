import styles from "./SearchFilterChips.module.css";
import PropTypes from "prop-types";
import { CloseIcon } from "../Icons/CloseIcon.jsx";

export function SearchFilterChip({ label, onRemove }) {
  return (
    <div className={styles.chip}>
      <span className={styles.chipLabel}>{label}</span>
      <button className={styles.chipRemove} onClick={onRemove}>
        <CloseIcon size={20} />
      </button>
    </div>
  );
}

SearchFilterChip.propTypes = {
  label: PropTypes.string,
  onRemove: PropTypes.func,
};
