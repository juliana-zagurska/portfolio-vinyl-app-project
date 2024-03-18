import Button from "./Button.jsx";

import styles from "./VinylCard.module.css";

function VinylCard({ vinyl, isInCollection, onCollectionToggle }) {
  function handleCollectionButtonClick() {
    onCollectionToggle(vinyl.id);
  }

  return (
    <article className={styles.root}>
      <div className={styles.cover}>
        <img className={styles.coverImage} src={vinyl.image} alt="cover" />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>
          {vinyl.title} - {vinyl.artist}
        </h4>

        <div className={styles.releaseRow}>
          <div className={styles.release}>
            <span>{vinyl.year}</span> <span>{vinyl.country}</span>
          </div>
        </div>
      </div>
      <div className={styles.action}>
        <Button
          fullWidth
          active={isInCollection}
          onClick={handleCollectionButtonClick}
          label={isInCollection ? "In collection" : "Add to collection"}
        />
      </div>
    </article>
  );
}

export default VinylCard;
