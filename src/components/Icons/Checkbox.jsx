import { iconPropTypes } from "./PropTypes";
import styles from "./Icon.module.css";

export const CheckboxIcon = ({ size = 24, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    height={size}
    width={size}
    fill={color}
    className={styles.icon}
  >
    <path d="m419-321 289-289-43-43-246 246-119-119-43 43 162 162ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z" />
  </svg>
);

CheckboxIcon.propTypes = iconPropTypes;
