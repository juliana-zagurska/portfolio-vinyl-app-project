import { useState } from "react";

export const useWishList = () => {
  const [wishlist, setWishList] = useState([]);

  function handleWishlistToggle(vinylId) {
    setWishList((wishlist) =>
      wishlist.includes(vinylId)
        ? wishlist.filter((id) => id !== vinylId)
        : [...wishlist, vinylId]
    );
  }
  return { wishlist, handleWishlistToggle };
};
