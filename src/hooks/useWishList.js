import { useState, useEffect } from "react";

export const useWishlist = (addNotification) => {
  const [wishlist, setWishlist] = useState(() =>
    localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );

  function toggleWishlist(vinyl) {
    const inWishlist = wishlist.includes(vinyl);

    setWishlist((prevWishlist) =>
      inWishlist
        ? prevWishlist.filter((id) => id !== vinyl)
        : [...prevWishlist, vinyl]
    );

    addNotification({
      message: inWishlist
        ? `${vinyl} removed from wishlist`
        : `${vinyl} added to wishlist`,
    });
  }
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return { wishlist, toggleWishlist };
};
