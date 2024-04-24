import PropTypes from "prop-types";
import styles from "./VinylCard.module.css";
import { HeartIcon } from "../Icons/HeartIcon.jsx";
import { HeaderIcons } from "../HeaderIcons/HeaderIcons";

export const VinylCard = ({ inWishlist, vinyl, onWishlistToggle }) => {
  return (
    <>
      <HeaderIcons
        icon={<HeartIcon isActive={inWishlist} />}
        onClick={() => onWishlistToggle(vinyl.id)}
        variant="white"
      />
    </>
  );
};

VinylCard.propTypes = {
  inCollection: PropTypes.bool.isRequired,
  inWishlist: PropTypes.bool.isRequired,
  vinyl: PropTypes.object.isRequired,
  onWishlistToggle: PropTypes.func.isRequired,
};
