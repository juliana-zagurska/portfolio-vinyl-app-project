import { useVinylList } from "../../hooks/useVinylList";
import { VinylCard } from "../../components/VinylCard";
import { useOutletContext } from "react-router-dom";

export const HomePage = () => {
  const vinylList = useVinylList();

  const { collection, wishlist, toggleCollection, toggleWishlist } =
    useOutletContext();

  return (
    <div className="main">
      <div className="item-list">
        {vinylList.slice(0, 6).map((vinyl) => (
          <VinylCard
            key={vinyl.id}
            inCollection={collection.includes(vinyl.id)}
            onCollectionToggle={toggleCollection}
            onWishlistToggle={toggleWishlist}
            vinyl={vinyl}
            inWishlist={wishlist.includes(vinyl.id)}
          />
        ))}
      </div>
    </div>
  );
};
