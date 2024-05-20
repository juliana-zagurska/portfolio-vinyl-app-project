import { Outlet, useOutletContext } from "react-router-dom";
import { useVinylList } from "../hooks/useVinylList";
import { Header } from "../components/Header";
import { Helmet } from "react-helmet-async";

export const SearchLayout = () => {
  const { collection, wishlist, toggleCollection, toggleWishlist } =
    useOutletContext();

  const vinylList = useVinylList();

  return (
    <>
      <Helmet>
        <title>Vinyl App – Search</title>
      </Helmet>
      <Header
        collectionSize={collection.length}
        wishlistSize={wishlist.length}
        vinylList={vinylList}
        type="backButton"
      />
      <Outlet
        context={{ collection, wishlist, toggleCollection, toggleWishlist }}
      />
    </>
  );
};
