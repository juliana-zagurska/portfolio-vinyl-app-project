import PropTypes from "prop-types";
import { iconPropTypes } from "./PropTypes";
import styles from "./Icon.module.css";

export const HeartIcon = ({ size = 24, color, isActive }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={styles.icons}
    fill={isActive ? "#FF4500" : color}
    viewBox="0 0 24 24"
  >
    <path
      d="M21 9.32647C21 14.4974 12 20 12 20C12 20 3 14.4974 3 9.32647C3 2.30564 12 2.40044 12 8.57947C12 2.40044 21 2.49288 21 9.32647Z"
      stroke="white"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);
HeartIcon.propTypes = {
  ...iconPropTypes,
  isActive: PropTypes.bool,
};
