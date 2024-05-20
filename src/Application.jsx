import { useCollection } from "./hooks/useCollection";
import { useWishlist } from "./hooks/useWishList";
import { Outlet } from "react-router-dom";

export const Application = () => {
  const { collection, toggleCollection } = useCollection();
  const { wishlist, toggleWishlist } = useWishlist();
  /*const [page, setPage] = useState(1);
  const vinylList = useVinylList();

  const cardsPerPage = 6;
  const pagesCount = Math.min(Math.ceil(vinylList.length / cardsPerPage), 5);
*/
  return (
    <>
      <div className="wrapper">
        <Outlet
          context={{
            collection,
            wishlist,
            toggleCollection,
            toggleWishlist,
          }}
        />
      </div>
    </>
  );
};
