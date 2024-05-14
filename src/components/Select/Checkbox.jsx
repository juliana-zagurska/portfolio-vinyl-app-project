import PropTypes from "prop-types";

import styles from "./Select.module.css";
import { CheckboxIcon } from "../Icons/Checkbox.jsx";
import { CheckboxEmptyIcon } from "../Icons/CheckboxEmpty.jsx";

export function Checkbox({ checked, ...props }) {
  return (
    <label className={styles.checkbox}>
      <input
        className={styles.hiddenInput}
        type="checkbox"
        checked={checked}
        {...props}
      />

      <span className={styles.checkboxIcon}>
        {checked ? <CheckboxIcon /> : <CheckboxEmptyIcon />}
      </span>
    </label>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
};
