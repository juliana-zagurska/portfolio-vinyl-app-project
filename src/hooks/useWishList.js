import { useState } from "react";

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  function toggleWishlist(vinylId) {
    setWishlist((wishlist) =>
      wishlist.includes(vinylId)
        ? wishlist.filter((id) => id !== vinylId)
        : [...wishlist, vinylId]
    );
  }
  return { wishlist, toggleWishlist };
};
