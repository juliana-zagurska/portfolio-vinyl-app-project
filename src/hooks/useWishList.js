import { useState, useEffect } from "react";

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState(() =>
    localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );

  function toggleWishlist(vinylId) {
    setWishlist((wishlist) =>
      wishlist.includes(vinylId)
        ? wishlist.filter((id) => id !== vinylId)
        : [...wishlist, vinylId]
    );
  }
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return { wishlist, toggleWishlist };
};
