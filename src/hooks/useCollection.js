import { useState, useEffect } from "react";

export const useCollection = (addNotification) => {
  const [collection, setCollection] = useState(() =>
    localStorage.getItem("collection")
      ? JSON.parse(localStorage.getItem("collection"))
      : []
  );
  function toggleCollection(vinyl) {
    const inCollection = collection.includes(vinyl);
    setCollection((prevCollection) =>
      inCollection
        ? prevCollection.filter((id) => id !== vinyl)
        : [...prevCollection, vinyl]
    );

    addNotification({
      message: inCollection
        ? `${vinyl} removed from collection`
        : `${vinyl} added to collection`,
    });
  }
  useEffect(() => {
    localStorage.setItem("collection", JSON.stringify(collection));
  }, [collection]);

  return { collection, toggleCollection };
};
