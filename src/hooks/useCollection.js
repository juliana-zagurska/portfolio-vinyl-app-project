import { useState, useEffect } from "react";

export const useCollection = (addNotification) => {
  const [collection, setCollection] = useState(() =>
    localStorage.getItem("collection")
      ? JSON.parse(localStorage.getItem("collection"))
      : []
  );
  function toggleCollection(vinyl) {
    const inCollection = collection.includes(vinyl.id);
    setCollection((prevCollection) =>
      inCollection
        ? prevCollection.filter((id) => id !== vinyl.id)
        : [...prevCollection, vinyl.id]
    );

    addNotification({
      message: inCollection
        ? `${vinyl.title} removed from collection`
        : `${vinyl.title} added to collection`,
    });
  }
  useEffect(() => {
    localStorage.setItem("collection", JSON.stringify(collection));
  }, [collection]);

  return { collection, toggleCollection };
};
