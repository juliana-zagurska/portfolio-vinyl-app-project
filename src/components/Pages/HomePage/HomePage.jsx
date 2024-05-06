import { useState } from "react";
import { useVinylList } from "../../../hooks/useVinylList";
import { useCollection } from "../../../hooks/useCollection";
import { useWishlist } from "../../../hooks/useWishList";
import { VinylCard } from "../../VinylCard";
import { Pagination } from "../../Pagination";

export const HomePage = () => {
  const { collection, toggleCollection } = useCollection();
  const { wishlist, toggleWishlist } = useWishlist();
  const [page, setPage] = useState(1);
  const vinylList = useVinylList();

  const cardsPerPage = 6;
  const pagesCount = Math.min(Math.ceil(vinylList.length / cardsPerPage), 5);

  return (
    <div className="main">
      <div className="item-list">
        {vinylList
          .slice((page - 1) * cardsPerPage, page * cardsPerPage)
          .map((vinyl) => (
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
      <Pagination
        pagesCount={pagesCount}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  );
};
