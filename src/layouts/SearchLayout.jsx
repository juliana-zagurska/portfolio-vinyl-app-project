import { Outlet, useOutletContext } from "react-router-dom";
import { Header } from "../components/Header";
import { Helmet } from "react-helmet-async";
import { Suspense } from "react";
import { Loader } from "../components/Loader/Loader.jsx";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "../components/Error";

export const SearchLayout = () => {
  const { collection, wishlist, toggleCollection, toggleWishlist } =
    useOutletContext();

  return (
    <>
      <Helmet>
        <title>Vinyl App – Search</title>
      </Helmet>
      <Header
        collectionSize={collection.length}
        wishlistSize={wishlist.length}
        vinylList={[]}
        type="backButton"
      />
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<Loader />}>
          <Outlet
            context={{ collection, wishlist, toggleCollection, toggleWishlist }}
          />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
