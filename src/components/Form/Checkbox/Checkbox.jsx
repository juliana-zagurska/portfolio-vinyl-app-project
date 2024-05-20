import PropTypes from "prop-types";
import styles from "./Checkbox.module.css";
import { CheckboxIcon } from "../../Icons/Checkbox.jsx";
import { CheckboxEmptyIcon } from "../../Icons/CheckboxEmpty.jsx";

export function Checkbox({ checked, ...props }) {
  return (
    <label className={styles.root}>
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        {...props}
      />

      <span className={styles.icon}>
        {checked ? <CheckboxIcon /> : <CheckboxEmptyIcon />}
      </span>
    </label>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
};
