import PropTypes from "prop-types";
import styles from "./Button.module.css";

export const Button = ({
  variant = "primary",
  isFullWidth = false,
  children,
  icon,
  className,
  ...props
}) => {
  return (
    <button
      className={`${styles.root} ${className || ""} ${
        isFullWidth ? styles.isFullWidth : ""
      } ${
        variant === "primary"
          ? styles.primary
          : variant === "secondary"
          ? styles.secondary
          : ""
      }`}
      {...props}
    >
      <span className={styles.label}>{children}</span>
      <span className={styles.icon}>{icon}</span>
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  isFullWidth: PropTypes.bool,
  children: PropTypes.node,
  icon: PropTypes.node,
  className: PropTypes.string,
};
