export const Application = () => {
  const collectionIds = [1, 2];
  const favoriteIds = [1, 3, 4];

  const vinylList = [
    {
      id: 1,
      name: "Nothing's Gonna Hurt You Baby",
      artist: "Cigarettes After Sex",
      image: {
        x1: "./src/assets/image1@1x.jpg",
        x2: "./src/assets/image1@1x.jpg",
      },
      year: 2010,
      country: "USA",
      genreId: 3,
      styles: ["Punk", "Dub", "Funk"],
    },
    {
      id: 2,
      name: "Let It Be",
      artist: "The Beatles",
      image: {
        x1: "./src/assets/image2@1x.jpg",
        x2: "./src/assets/image1@1x.jpg",
      },
      year: 1960,
      country: "UK",
      genreId: 5,
      styles: ["Rock", "Dub", "Funk"],
    },
    {
      id: 3,
      name: "Paint The Town Red",
      artist: "Doja Cat",
      image: {
        x1: "./src/assets/image3@1x.jpg",
        x2: "./src/assets/image3@1x.jpg",
      },
      year: 2023,
      country: "USA",
      genreId: 4,
      styles: ["Punk", "Dub", "Funk"],
    },
    {
      id: 4,
      name: "Who Let The Dogs Out",
      artist: "Baha Men",
      image: {
        x1: "./src/assets/image4@1x.jpg",
        x2: "./src/assets/image4@1x.jpg",
      },
      year: 2000,
      country: "USA",
      genreId: 4,
      styles: ["House", "Ragga", "Hip-Hop"],
    },
    {
      id: 5,
      name: "U Can't touch this",
      artist: "MC Hammer",
      image: {
        x1: "./src/assets/image5@1x.jpg",
        x2: "./src/assets/image5@1x.jpg",
      },
      year: 1990,
      country: "USA",
      genreId: 4,
      styles: ["Rap", "Ragga", "Hip-Hop"],
    },
    {
      id: 6,
      name: "Ra-Ta-Ta",
      artist: "Wencke Myhre",
      image: {
        x1: "./src/assets/image7@1x.jpg",
        x2: "./src/assets/image7@1x.jpg",
      },
      year: 1970,
      country: "Germany",
      genreId: 4,
      styles: ["Electronic", "Ragga", "Hip-Hop"],
    },
    {
      id: 7,
      name: "Let There Be Rock",
      artist: "AC/DC",
      image: {
        x1: "./src/assets/image8@1x.jpg",
        x2: "./src/assets/image8@1x.jpg",
      },
      year: 1990,
      country: "USA",
      genreId: 4,
      styles: ["Electronic", "Rock", "Hip-Hop"],
    },
    {
      id: 8,
      name: "Let There Be Rock",
      artist: "AC/DC",
      image: {
        x1: "./src/assets/image9@1x.jpg",
        x2: "./src/assets/image9@1x.jpg",
      },
      year: 1990,
      country: "USA",
      genreId: 4,
      styles: ["Electronic", "Rock", "Hip-Hop"],
    },
    {
      id: 9,
      name: "Let There Be Rock",
      artist: "AC/DC",
      image: {
        x1: "./src/assets/image10@1x.jpg",
        x2: "./src/assets/image10@1x.jpg",
      },
      year: 1990,
      country: "USA",
      genreId: 4,
      styles: ["Electronic", "Rock", "Hip-Hop"],
    },
    {
      id: 10,
      name: "Let There Be Rock",
      artist: "AC/DC",
      image: {
        x1: "./src/assets/image11@1x.jpg",
        x2: "./src/assets/image11@1x.jpg",
      },
      year: 1990,
      country: "USA",
      genreId: 4,
      styles: ["Electronic", "Rock", "Hip-Hop"],
    },
    {
      id: 11,
      name: "Let There Be Rock",
      artist: "AC/DC",
      image: {
        x1: "./src/assets/image12@1x.jpg",
        x2: "./src/assets/image12@1x.jpg",
      },
      year: 1990,
      country: "USA",
      genreId: 4,
      styles: ["Electronic", "Rock", "Hip-Hop"],
    },
    {
      id: 12,
      name: "Let There Be Rock",
      artist: "AC/DC",
      image: {
        x1: "./src/assets/image13@1x.png",
        x2: "./src/assets/image13@1x.png",
      },
      year: 1990,
      country: "USA",
      genreId: 4,
      styles: ["Electronic", "Rock", "Hip-Hop"],
    },
    {
      id: 13,
      name: "Let There Be Rock",
      artist: "AC/DC",
      image: {
        x1: "./src/assets/image14@1x.jpg",
        x2: "./src/assets/image14@1x.jpg",
      },
      year: 1990,
      country: "USA",
      genreId: 4,
      styles: ["Electronic", "Rock", "Hip-Hop"],
    },
    {
      id: 14,
      name: "Let There Be Rock",
      artist: "AC/DC",
      image: {
        x1: "./src/assets/image15@1x.png",
        x2: "./src/assets/image15@1x.png",
      },
      year: 1990,
      country: "USA",
      genreId: 4,
      styles: ["Electronic", "Rock", "Hip-Hop"],
    },
    {
      id: 15,
      name: "Let There Be Rock",
      artist: "AC/DC",
      image: {
        x1: "./src/assets/image16@1x.png",
        x2: "./src/assets/image16@1x.png",
      },
      year: 1990,
      country: "USA",
      genreId: 4,
      styles: ["Electronic", "Rock", "Hip-Hop"],
    },
    {
      id: 16,
      name: "Let There Be Rock",
      artist: "AC/DC",
      image: {
        x1: "./src/assets/image17@1x.png",
        x2: "./src/assets/image17@1x.png",
      },
      year: 1990,
      country: "USA",
      genreId: 4,
      styles: ["Electronic", "Rock", "Hip-Hop"],
    },
    {
      id: 17,
      name: "Let There Be Rock",
      artist: "AC/DC",
      image: {
        x1: "./src/assets/image18@1x.png",
        x2: "./src/assets/image18@1x.png",
      },
      year: 1990,
      country: "USA",
      genreId: 4,
      styles: ["Electronic", "Rock", "Hip-Hop"],
    },
    {
      id: 18,
      name: "Nothing's Gonna Hurt You Baby",
      artist: "Cigarettes After Sex",
      image: {
        x1: "./src/assets/image19@1x.jpg",
        x2: "./src/assets/image19@1x.jpg",
      },
      year: 2010,
      country: "USA",
      genreId: 3,
      styles: ["Punk", "Dub", "Funk"],
    },
  ];
  const genres = [
    {
      id: 1,
      name: "Jazz",
      color: "#ffc3f3",
      textTheme: "dark",
    },
    {
      id: 2,
      name: "Country",
      color: "#ffa161",
      textTheme: "light",
    },
    {
      id: 3,
      name: "Alternative",
      color: "#ffa161",
      textTheme: "light",
    },
    {
      id: 4,
      name: "Pop",
      color: "#ffa161",
      textTheme: "light",
    },
    {
      id: 5,
      name: "Rock",
      color: "#ffa161",
      textTheme: "light",
    },
  ];

  const renderVinylCard = (vinylCard) => {
    const vinylCardGenre = genres.find(
      (genre) => genre.id === vinylCard.genreId
    );

    const inCollection = collectionIds.includes(vinylCard.id);
    const inFavorites = favoriteIds.includes(vinylCard.id);
    const toggleFavorite = () => {
      console.error("Favorites not implemented", { value: vinylCard.id });
    };
    const addToCollection = () => {
      console.error("Add to collection button not implemented", {
        value: vinylCard.id,
      });
    };
    return (
      <div className="item" key={vinylCard.id}>
        <div className="vinyl-card">
          <div className="vinyl-card__cover">
            <button className="fas fa-heart" onClick={toggleFavorite}>
              {inFavorites ? (
                <svg
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.14286"
                    width="36"
                    height="36"
                    rx="4"
                    fill="white"
                  />
                  <path
                    d="M28.4286 15.4244C28.4286 21.2558 18.1429 27.4612 18.1429 27.4612C18.1429 27.4612 7.85715 21.2558 7.85715 15.4244C7.85715 7.50682 18.1429 7.61374 18.1429 14.582C18.1429 7.61374 28.4286 7.71798 28.4286 15.4244Z"
                    fill="#FF4500"
                  />
                </svg>
              ) : (
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="4" fill="white" />
                  <path
                    d="M28.2857 15.4244C28.2857 21.2558 18 27.4612 18 27.4612C18 27.4612 7.71429 21.2558 7.71429 15.4244C7.71429 7.50682 18 7.61374 18 14.582C18 7.61374 28.2857 7.71798 28.2857 15.4244Z"
                    stroke="#083644"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            <img
              src={vinylCard.image.x1}
              alt={vinylCard.name}
              className="retina-image"
            />
          </div>
          <div className="vinyl-card__content">
            <div className="item-header">
              <h1 className="vinyl-card__title">{vinylCard.name}</h1>
              <h2 className="vinyl-card__artist">{vinylCard.artist}</h2>
              <span>{vinylCardGenre.name}</span>
            </div>
            <div className="vinyl-card__release">
              <span>{vinylCard.year}</span>
              <span>{vinylCard.country}</span>
            </div>
            <div className="vinyl-card__genres">
              {vinylCard.styles.map((style) => (
                <span key={style}>{style}</span>
              ))}
            </div>
          </div>
          <div className="vinyl-card__action">
            <button
              className={
                inCollection
                  ? "button--active add-button"
                  : "add-button--default add-button"
              }
              onClick={addToCollection}
            >
              <span className="button__label">
                {inCollection ? "Added" : "Add"}
              </span>
              <span className="button__icon">
                {inCollection ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M378-258q-6 0-11-2t-10-7L176-448q-9-9-9-22t9-22q9-9 21-9t21 9l160 160 363-363q9-9 21.5-9t21.5 9q9 9 9 21.5t-9 21.5L399-267q-5 5-10 7t-11 2Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M479.825-200Q467-200 458.5-208.625T450-230v-220H230q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T230-510h220v-220q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-730v220h220q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T730-450H510v220q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Z" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div className="navigation">
            <button className="back-button" id="go-back">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              BACK
            </button>
          </div>
          <div className="icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 9.32647C21 14.4974 12 20 12 20C12 20 3 14.4974 3 9.32647C3 2.30564 12 2.40044 12 8.57947C12 2.40044 21 2.49288 21 9.32647Z"
                stroke="white"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 18.2222V9.33333C21 8.86184 20.8104 8.40965 20.4728 8.07625C20.1352 7.74286 19.6774 7.55556 19.2 7.55556H13.1124C12.7781 7.55554 12.4503 7.46356 12.1659 7.28992C11.8816 7.11628 11.6518 6.86783 11.5023 6.57244L10.6977 4.98311C10.5482 4.68759 10.3182 4.43906 10.0337 4.2654C9.74912 4.09175 9.4212 3.99985 9.0867 4H4.8C4.32261 4 3.86477 4.1873 3.52721 4.5207C3.18964 4.8541 3 5.30628 3 5.77778V18.2222C3 18.6937 3.18964 19.1459 3.52721 19.4793C3.86477 19.8127 4.32261 20 4.8 20H19.2C19.6774 20 20.1352 19.8127 20.4728 19.4793C20.8104 19.1459 21 18.6937 21 18.2222Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="main">
          <div className="item-list" id="item-list">
            {vinylList.map(renderVinylCard)}
          </div>
        </div>
      </div>
    </>
  );
};
