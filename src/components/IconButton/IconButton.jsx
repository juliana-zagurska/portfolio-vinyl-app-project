import PropTypes from "prop-types";
import styles from "./IconButton.module.css";

export const IconButton = ({
  icon,
  variant = "default",
  isSmall,
  count,
  ...props
}) => {
  const rootClasses = [
    styles.root,
    variant === "white" && styles.isWhite,
    isSmall && styles.isSmall,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={rootClasses} {...props}>
      {icon}

      {Boolean(count) && <span className={styles.count}>{count}</span>}
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["white", "default"]),
  isSmall: PropTypes.bool,
  count: PropTypes.number,
};
