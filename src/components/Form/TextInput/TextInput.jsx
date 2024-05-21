import PropTypes from "prop-types";
import { forwardRef } from "react";

import styles from "./TextInput.module.css";

export const TextInput = forwardRef(({ error, placeholder, ...props }, ref) => (
  <>
    {error && <div className={styles.errorTooltip}>{error}</div>}
    <input
      className={`${styles.root} ${error ? styles.error : ""}`}
      type="text"
      placeholder={placeholder}
      {...props}
      ref={ref}
    />
  </>
));

TextInput.displayName = "TextInput";

TextInput.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
};
