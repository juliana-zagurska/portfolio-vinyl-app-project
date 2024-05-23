import { iconPropTypes } from "./PropTypes";
import styles from "./Icon.module.css";

export const CheckIcon = ({ size = 24, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    height={size}
    width={size}
    fill={color}
    className={styles.icon}
  >
    <path d="M378-258q-6 0-11-2t-10-7L176-448q-9-9-9-22t9-22q9-9 21-9t21 9l160 160 363-363q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5L399-267q-5 5-10 7t-11 2Z" />
  </svg>
);

CheckIcon.propTypes = iconPropTypes;
