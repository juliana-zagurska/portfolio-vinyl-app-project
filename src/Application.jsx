import { useState } from "react";
import { Header } from "./components/Header";
import { useVinylList } from "./hooks/useVinylList";
import { useCollection } from "./hooks/useCollection";
import { useWishlist } from "./hooks/useWishList";
import { VinylCard } from "./components/VinylCard";
import { Pagination } from "./components/Pagination";

export const Application = () => {
  const { collection, toggleCollection } = useCollection();
  const { wishlist, toggleWishlist } = useWishlist();
  const [page, setPage] = useState(1);
  const vinylList = useVinylList();

  const cardsPerPage = 6;
  const pagesCount = Math.min(Math.ceil(vinylList.length / cardsPerPage), 5);

  return (
    <>
      <div className="wrapper">
        <Header
          collectionSize={collection.length}
          wishlistSize={wishlist.length}
          vinylList={vinylList}
        />
        <div className="main">
          <div className="item-list" id="item-list">
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
            className="footer"
            pagesCount={pagesCount}
            currentPage={page}
            onPageChange={setPage}
          />
        </div>
      </div>
    </>
  );
};
