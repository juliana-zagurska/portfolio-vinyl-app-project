import { iconPropTypes } from "./PropTypes";
import styles from "./Icon.module.css";

export const CheckboxEmptyIcon = ({ size = 24, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    height={size}
    width={size}
    fill={color}
    className={styles.icon}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Z" />
  </svg>
);

CheckboxEmptyIcon.propTypes = iconPropTypes;
