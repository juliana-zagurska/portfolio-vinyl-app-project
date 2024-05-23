import { iconPropTypes } from "./PropTypes";
import styles from "./Icon.module.css";

export const ArrowDownIcon = ({ size = 24, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    height={size}
    width={size}
    fill={color}
    className={styles.icon}
  >
    <path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
  </svg>
);

ArrowDownIcon.propTypes = iconPropTypes;
