import { useState, useEffect } from "react";

export const useWishlist = (addNotification) => {
  const [wishlist, setWishlist] = useState(() =>
    localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );

  function toggleWishlist(vinyl) {
    const inWishlist = wishlist.includes(vinyl.id);

    setWishlist((prevWishlist) =>
      inWishlist
        ? prevWishlist.filter((id) => id !== vinyl.id)
        : [...prevWishlist, vinyl.id]
    );

    addNotification({
      message: inWishlist
        ? `${vinyl.title} removed from wishlist`
        : `${vinyl.title} added to wishlist`,
    });
  }
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return { wishlist, toggleWishlist };
};
