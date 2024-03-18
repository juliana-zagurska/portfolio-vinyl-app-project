import { useState } from "react";

import Button from "./Button.jsx";
import HeartIcon from "./HeartIcon.jsx";
import IconButton from "./IconButton.jsx";

import styles from "./Vinyl.module.css";
import {
  fetchAddVinylToCollection,
  fetchRemoveVinylFromCollection,
} from "../api/vinylCollection.js";
import {
  fetchAddVinylToWishlist,
  fetchRemoveVinylFromWishlist,
} from "../api/vinylWishlist.js";

function Vinyl({ vinyl }) {
  const [inWishlist, setInWishlist] = useState(false);
  const [inCollection, setInCollection] = useState(false);
  const [isUpdatingCollection, setIsUpdatingCollection] = useState(false);
  const [error, setError] = useState("");
  const [requestCount, setRequestCount] = useState(0);

  async function handleWishlistButtonClick() {
    const wasInWishlist = inWishlist;
    setInWishlist(!inWishlist);
    setRequestCount(requestCount + 1);

    try {
      if (wasInWishlist) {
        await fetchRemoveVinylFromWishlist(vinyl.id);
      } else {
        await fetchAddVinylToWishlist(vinyl.id);
      }
    } catch (error) {
      console.error("Failed to update wishlist status on the server", error);
      setInWishlist(wasInWishlist);
    } finally {
      setRequestCount((prevCount) => prevCount - 1);
      if (requestCount - 1 === 0 && !wasInWishlist) {
        setInWishlist(false);
      }
    }
  }

  async function handleAddToCollection() {
    if (isUpdatingCollection) return;

    setIsUpdatingCollection(true);

    try {
      if (inCollection) {
        await fetchRemoveVinylFromCollection(vinyl.id);
      } else {
        await fetchAddVinylToCollection(vinyl.id);
      }
      setInCollection(!inCollection);
    } catch (error) {
      setError("Помилка при виконанні запиту. Будь ласка, спробуйте знову.");
      console.error(error);
    }

    setIsUpdatingCollection(false);
  }

  return (
    <article className={styles.root}>
      <div className={styles.cover}>
        <div className={styles.coverActions}>
          <IconButton
            white
            title="Add to wishlist"
            onClick={handleWishlistButtonClick}
            icon={
              inWishlist ? (
                <HeartIcon size={24} filled style={{ fill: "#FF4500" }} />
              ) : (
                <HeartIcon size={24} />
              )
            }
          />
        </div>
        <img className={styles.coverImage} src={vinyl.image} alt="" />
      </div>
      <div className={styles.content}>
        <header>
          <h4 className={styles.title}>{vinyl.title}</h4>
          <div className={styles.artist}>{vinyl.artist}</div>
        </header>
        <div className={styles.releaseRow}>
          <div className={styles.release}>
            <span>{vinyl.country}</span>
            <span>{vinyl.year}</span>
          </div>
        </div>
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div className={styles.action}>
        <Button
          fullWidth
          active={inCollection}
          label={inCollection ? "In collection" : "Add to collection"}
          onClick={handleAddToCollection}
        />
      </div>
      <div className={styles.tracklist}>
        <h3 className={styles.tracklistTitle}>Track list</h3>
        <ol className={styles.tracks}>
          {vinyl.tracklist.map((track, index) => (
            <li key={index} className={styles.trackItem}>
              {track.position && (
                <span className={styles.trackPosition}>{track.position}</span>
              )}
              <span className={styles.trackTitle}>{track.title}</span>
              {track.duration && (
                <span className={styles.trackDuration}>{track.duration}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}

export default Vinyl;
