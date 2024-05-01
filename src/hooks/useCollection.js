import { useState } from "react";

export const useCollection = () => {
  const [collection, setCollection] = useState([]);

  function toggleCollection(vinylId) {
    setCollection((collection) =>
      collection.includes(vinylId)
        ? collection.filter((id) => id !== vinylId)
        : [...collection, vinylId]
    );
  }

  return { collection, toggleCollection };
};
