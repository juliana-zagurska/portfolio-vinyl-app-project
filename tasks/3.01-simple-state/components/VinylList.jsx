import { useState } from "react";
import CollectionBanner from "./CollectionBanner.jsx";
import SearchInput from "./SearchInput.jsx";
import VinylCard from "./VinylCard.jsx";
import styles from "./VinylList.module.css";

function VinylList({ list }) {
  const [collection, setCollection] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleCollectionToggle(vinylId) {
    if (collection.includes(vinylId)) {
      setCollection(collection.filter((id) => id !== vinylId));
    } else {
      setCollection([...collection, vinylId]);
    }
  }

  function handleSearchInputChange(value) {
    setSearchTerm(value);
  }

  const filteredList = list.filter(
    (vinyl) =>
      vinyl.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vinyl.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.root}>
      <div className={styles.collection}>
        <CollectionBanner collectionSize={collection.length} />
      </div>

      <div className={styles.filter}>
        <SearchInput
          maxLength={100}
          placeholder="Filter by artist or title"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </div>

      <div className={styles.results}>
        {filteredList.map((vinyl) => (
          <VinylCard
            key={vinyl.id}
            vinyl={vinyl}
            isInCollection={collection.includes(vinyl.id)}
            onAddToCollection={handleCollectionToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default VinylList;
