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
    viewBox="0 0 37 36"
  >
    <rect x="0.14286" width="36" height="36" rx="4" fill="white" />
    {isActive ? (
      <path d="M28.4286 15.4244C28.4286 21.2558 18.1429 27.4612 18.1429 27.4612C18.1429 27.4612 7.85715 21.2558 7.85715 15.4244C7.85715 7.50682 18.1429 7.61374 18.1429 14.582C18.1429 7.61374 28.4286 7.71798 28.4286 15.4244Z" />
    ) : (
      <path
        d="M28.2857 15.4244C28.2857 21.2558 18 27.4612 18 27.4612C18 27.4612 7.71429 21.2558 7.71429 15.4244C7.71429 7.50682 18 7.61374 18 14.582C18 7.61374 28.2857 7.71798 28.2857 15.4244Z"
        stroke="#083644"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    )}
  </svg>
);
HeartIcon.propTypes = {
  ...iconPropTypes,
  isActive: PropTypes.bool,
};
