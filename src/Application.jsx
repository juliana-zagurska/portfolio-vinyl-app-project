import { useCollection } from "./hooks/useCollection";
import { useWishlist } from "./hooks/useWishList";
import { Outlet } from "react-router-dom";

export const Application = () => {
  const { collection, toggleCollection } = useCollection();
  const { wishlist, toggleWishlist } = useWishlist();
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
