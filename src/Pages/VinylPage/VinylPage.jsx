import { useVinylById } from "../../hooks/useVinylById.js";
import { VinylCard } from "../../components/VinylCard/index.js";
import styles from "./VinylPage.module.css";
import { useOutletContext, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const VinylPage = () => {
  const { id } = useParams();

  const vinyl = useVinylById(Number(id));

  const { collection, wishlist, toggleCollection, toggleWishlist } =
    useOutletContext();

  return (
    <div className="content">
      <Helmet>
        <title>Vinyl App – {vinyl.title}</title>
      </Helmet>
      <div className={styles.root}>
        <VinylCard
          inCollection={collection.includes(vinyl.id)}
          onCollectionToggle={toggleCollection}
          onWishlistToggle={toggleWishlist}
          vinyl={vinyl}
          inWishlist={wishlist.includes(vinyl.id)}
        />
      </div>
    </div>
  );
};

VinylPage.propTypes = {};
