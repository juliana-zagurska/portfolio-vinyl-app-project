import { VinylCard } from "../../components/VinylCard";
import { useOutletContext } from "react-router-dom";
import { GenresList } from "../../components/GenresList";
import { VinylList } from "../../components/VinylList";
import { useFilteredVinylListAsync } from "../../hooks/useFilteredVinylListAsync.js";

export const HomePage = () => {
  const { results } = useFilteredVinylListAsync(
    {},
    { offset: 0, limit: 6 },
    { suspense: true }
  );

  const { collection, wishlist, toggleCollection, toggleWishlist } =
    useOutletContext();

  return (
    <div className="main">
      <GenresList />
      <div className="item-list">
        <VinylList>
          {results.map((vinyl) => (
            <VinylCard
              key={vinyl.id}
              inCollection={collection.includes(vinyl.id)}
              onCollectionToggle={toggleCollection}
              onWishlistToggle={toggleWishlist}
              vinyl={vinyl}
              inWishlist={wishlist.includes(vinyl.id)}
            />
          ))}
        </VinylList>
      </div>
    </div>
  );
};

HomePage.propTypes = {};
