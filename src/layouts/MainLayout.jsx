import { Outlet, useOutletContext } from "react-router-dom";
import { Header } from "../components/Header";
import { Helmet } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";
import { Loader } from "../components/Loader/index.js";
import { Suspense } from "react";
import { useVinylList } from "../hooks/useVinylList";
import { Error } from "../components/Error/index.js";

export const MainLayout = () => {
  const { collection, wishlist, toggleCollection, toggleWishlist } =
    useOutletContext();

  const vinylList = useVinylList();
  return (
    <>
      <Helmet>
        <title>Vinyl App</title>
      </Helmet>
      <Header
        collectionSize={collection.length}
        wishlistSize={wishlist.length}
        vinylList={vinylList}
        type="search"
      />
      <Suspense fallback={<Loader />}>
        <ErrorBoundary FallbackComponent={Error}>
          <Outlet
            context={{ collection, wishlist, toggleCollection, toggleWishlist }}
          />
        </ErrorBoundary>
      </Suspense>
    </>
  );
};
