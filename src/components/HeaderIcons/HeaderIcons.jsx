import PropTypes from "prop-types";
import styles from "./HeaderIcons.module.css";

export const HeaderIcons = ({
  icon,
  variant = "default",
  isSmall,
  count,
  ...props
}) => {
  return (
    <div className={styles.icons}>
      <div className={styles.iconCounter}>
        <button
          className={`${styles.root} ${
            variant === "white" ? styles.isWhite : ""
          } ${isSmall ? styles.isSmall : ""}`}
          {...props}
        >
          {icon}
          {Boolean(count) && <span className={styles.count}>{count}</span>}
        </button>
      </div>
    </div>
  );
};

HeaderIcons.propTypes = {
  icon: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["white", "default"]),
  isSmall: PropTypes.bool,
  count: PropTypes.number,
};
