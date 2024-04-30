import PropTypes from "prop-types";
import styles from "./HeaderLayout.module.css";
import { BackIcon } from "../Icons/BackIcon.jsx";

export const HeaderLayout = ({ menu }) => {
  return (
    <div className={styles.header}>
      <div className={styles.navigation}>
        <button className={styles.backButton} id="go-back">
          <BackIcon />
          BACK
        </button>
        {menu}
      </div>
    </div>
  );
};

HeaderLayout.propTypes = {
  menu: PropTypes.node.isRequired,
};
