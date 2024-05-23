import { useState, useEffect } from "react";

export const useCollection = () => {
  const [collection, setCollection] = useState(() =>
    localStorage.getItem("collection")
      ? JSON.parse(localStorage.getItem("collection"))
      : []
  );
  function toggleCollection(vinylId) {
    setCollection((collection) =>
      collection.includes(vinylId)
        ? collection.filter((id) => id !== vinylId)
        : [...collection, vinylId]
    );
  }
  useEffect(() => {
    localStorage.setItem("collection", JSON.stringify(collection));
  }, [collection]);

  return { collection, toggleCollection };
};
