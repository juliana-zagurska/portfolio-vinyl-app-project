export const Application = () => {
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
            <div className="item">
              <i className="fas fa-heart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" rx="4" fill="white" />
                  <path
                    d="M19 10.6617C19 14.2167 12.5 17.9998 12.5 17.9998C12.5 17.9998 6 14.2167 6 10.6617C6 5.83488 12.5 5.90006 12.5 10.1481C12.5 5.90006 19 5.96361 19 10.6617Z"
                    stroke="black"
                    strokeWidth="1.10308"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <img
                src="./src/assets/image1@1x.png"
                alt="Item 1"
                className="retina-image"
              />
              <div className="item-header">
                <h1>Let There Be Rock</h1>
                <h2>AC/DC</h2>
              </div>
              <div className="item-text">
                <p>
                  Year : <span>1990</span>
                </p>
                <p>
                  Style : <span>Punk, Dub, Funk</span>
                </p>
                <p>
                  Country : <span>USA</span>
                </p>
              </div>
              <button className="add-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 16.6667V9.99999M10 9.99999V3.33333M10 9.99999H16.6667M10 9.99999H3.33334"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add
              </button>
            </div>
            <div className="item">
              <i className="fas fa-heart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" rx="4" fill="white" />
                  <path
                    d="M19 10.6617C19 14.2167 12.5 17.9998 12.5 17.9998C12.5 17.9998 6 14.2167 6 10.6617C6 5.83488 12.5 5.90006 12.5 10.1481C12.5 5.90006 19 5.96361 19 10.6617Z"
                    stroke="black"
                    strokeWidth="1.10308"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <img
                src="./src/assets/image2@1x.jpg"
                alt="Item 2"
                className="retina-image"
              />
              <div className="item-header">
                <h1>Let There Be Rock</h1>
                <h2>AC/DC</h2>
              </div>
              <div className="item-text">
                <p>
                  Year : <span>1990</span>
                </p>
                <p>
                  Style : <span>Punk, Dub, Funk</span>
                </p>
                <p>
                  Country : <span>USA</span>
                </p>
              </div>
              <button className="add-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 16.6667V9.99999M10 9.99999V3.33333M10 9.99999H16.6667M10 9.99999H3.33334"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add
              </button>
            </div>
            <div className="item">
              <i className="fas fa-heart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" rx="4" fill="white" />
                  <path
                    d="M19 10.6617C19 14.2167 12.5 17.9998 12.5 17.9998C12.5 17.9998 6 14.2167 6 10.6617C6 5.83488 12.5 5.90006 12.5 10.1481C12.5 5.90006 19 5.96361 19 10.6617Z"
                    stroke="black"
                    strokeWidth="1.10308"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <img src="./src/assets/image3@1x.jpg" alt="Item 3" />
              <div className="item-header">
                <h1>Let There Be Rock</h1>
                <h2>AC/DC</h2>
              </div>
              <div className="item-text">
                <p>
                  Year : <span>1990</span>
                </p>
                <p>
                  Style : <span>Punk, Dub, Funk</span>
                </p>
                <p>
                  Country : <span>USA</span>
                </p>
              </div>
              <button className="add-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 16.6667V9.99999M10 9.99999V3.33333M10 9.99999H16.6667M10 9.99999H3.33334"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add
              </button>
            </div>
            <div className="item">
              <i className="fas fa-heart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" rx="4" fill="white" />
                  <path
                    d="M19 10.6617C19 14.2167 12.5 17.9998 12.5 17.9998C12.5 17.9998 6 14.2167 6 10.6617C6 5.83488 12.5 5.90006 12.5 10.1481C12.5 5.90006 19 5.96361 19 10.6617Z"
                    stroke="black"
                    strokeWidth="1.10308"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <img src="./src/assets/image4@1x.jpg" alt="Item 4" />
              <div className="item-header">
                <h1>Let There Be Rock</h1>
                <h2>AC/DC</h2>
              </div>
              <div className="item-text">
                <p>
                  Year : <span>1990</span>
                </p>
                <p>
                  Style : <span>Punk, Dub, Funk</span>
                </p>
                <p>
                  Country : <span>USA</span>
                </p>
              </div>
              <button className="add-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 16.6667V9.99999M10 9.99999V3.33333M10 9.99999H16.6667M10 9.99999H3.33334"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add
              </button>
            </div>
            <div className="item">
              <i className="fas fa-heart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" rx="4" fill="white" />
                  <path
                    d="M19 10.6617C19 14.2167 12.5 17.9998 12.5 17.9998C12.5 17.9998 6 14.2167 6 10.6617C6 5.83488 12.5 5.90006 12.5 10.1481C12.5 5.90006 19 5.96361 19 10.6617Z"
                    stroke="black"
                    strokeWidth="1.10308"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <img src="./src/assets/image5@1x.jpg" alt="Item 5" />
              <div className="item-header">
                <h1>Let There Be Rock</h1>
                <h2>AC/DC</h2>
              </div>
              <div className="item-text">
                <p>
                  Year : <span>1990</span>
                </p>
                <p>
                  Style : <span>Punk, Dub, Funk</span>
                </p>
                <p>
                  Country : <span>USA</span>
                </p>
              </div>
              <button className="add-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 16.6667V9.99999M10 9.99999V3.33333M10 9.99999H16.6667M10 9.99999H3.33334"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add
              </button>
            </div>
            <div className="item">
              <i className="fas fa-heart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" rx="4" fill="white" />
                  <path
                    d="M19 10.6617C19 14.2167 12.5 17.9998 12.5 17.9998C12.5 17.9998 6 14.2167 6 10.6617C6 5.83488 12.5 5.90006 12.5 10.1481C12.5 5.90006 19 5.96361 19 10.6617Z"
                    stroke="black"
                    strokeWidth="1.10308"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <img src="./src/assets/image6@1x.jpg" alt="Item 6" />
              <div className="item-header">
                <h1>Let There Be Rock</h1>
                <h2>AC/DC</h2>
              </div>
              <div className="item-text">
                <p>
                  Year : <span>1990</span>
                </p>
                <p>
                  Style : <span>Punk, Dub, Funk</span>
                </p>
                <p>
                  Country : <span>USA</span>
                </p>
              </div>
              <button className="add-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 16.6667V9.99999M10 9.99999V3.33333M10 9.99999H16.6667M10 9.99999H3.33334"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add
              </button>
            </div>
            <div className="item">
              <i className="fas fa-heart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" rx="4" fill="white" />
                  <path
                    d="M19 10.6617C19 14.2167 12.5 17.9998 12.5 17.9998C12.5 17.9998 6 14.2167 6 10.6617C6 5.83488 12.5 5.90006 12.5 10.1481C12.5 5.90006 19 5.96361 19 10.6617Z"
                    stroke="black"
                    strokeWidth="1.10308"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <img src="./src/assets/image7@1x.jpg" alt="Item 7" />
              <div className="item-header">
                <h1>Let There Be Rock</h1>
                <h2>AC/DC</h2>
              </div>
              <div className="item-text">
                <p>
                  Year : <span>1990</span>
                </p>
                <p>
                  Style : <span>Punk, Dub, Funk</span>
                </p>
                <p>
                  Country : <span>USA</span>
                </p>
              </div>
              <button className="add-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 16.6667V9.99999M10 9.99999V3.33333M10 9.99999H16.6667M10 9.99999H3.33334"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add
              </button>
            </div>
            <div className="item">
              <i className="fas fa-heart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" rx="4" fill="white" />
                  <path
                    d="M19 10.6617C19 14.2167 12.5 17.9998 12.5 17.9998C12.5 17.9998 6 14.2167 6 10.6617C6 5.83488 12.5 5.90006 12.5 10.1481C12.5 5.90006 19 5.96361 19 10.6617Z"
                    stroke="black"
                    strokeWidth="1.10308"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <img src="./src/assets/image8@1x.jpg" alt="Item 8" />
              <div className="item-header">
                <h1>Let There Be Rock</h1>
                <h2>AC/DC</h2>
              </div>
              <div className="item-text">
                <p>
                  Year : <span>1990</span>
                </p>
                <p>
                  Style : <span>Punk, Dub, Funk</span>
                </p>
                <p>
                  Country : <span>USA</span>
                </p>
              </div>
              <button className="add-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 16.6667V9.99999M10 9.99999V3.33333M10 9.99999H16.6667M10 9.99999H3.33334"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add
              </button>
            </div>
            <div className="item">
              <i className="fas fa-heart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" rx="4" fill="white" />
                  <path
                    d="M19 10.6617C19 14.2167 12.5 17.9998 12.5 17.9998C12.5 17.9998 6 14.2167 6 10.6617C6 5.83488 12.5 5.90006 12.5 10.1481C12.5 5.90006 19 5.96361 19 10.6617Z"
                    stroke="black"
                    strokeWidth="1.10308"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <img src="./src/assets/image9@1x.jpg" alt="Item 9" />
              <div className="item-header">
                <h1>Let There Be Rock</h1>
                <h2>AC/DC</h2>
              </div>
              <div className="item-text">
                <p>
                  Year : <span>1990</span>
                </p>
                <p>
                  Style : <span>Punk, Dub, Funk</span>
                </p>
                <p>
                  Country : <span>USA</span>
                </p>
              </div>
              <button className="add-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 16.6667V9.99999M10 9.99999V3.33333M10 9.99999H16.6667M10 9.99999H3.33334"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add
              </button>
            </div>
            <div className="item">
              <i className="fas fa-heart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" rx="4" fill="white" />
                  <path
                    d="M19 10.6617C19 14.2167 12.5 17.9998 12.5 17.9998C12.5 17.9998 6 14.2167 6 10.6617C6 5.83488 12.5 5.90006 12.5 10.1481C12.5 5.90006 19 5.96361 19 10.6617Z"
                    stroke="black"
                    strokeWidth="1.10308"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <img src="./src/assets/image10@1x.jpg" alt="Item 10" />
              <div className="item-header">
                <h1>Let There Be Rock</h1>
                <h2>AC/DC</h2>
              </div>
              <div className="item-text">
                <p>
                  Year : <span>1990</span>
                </p>
                <p>
                  Style : <span>Punk, Dub, Funk</span>
                </p>
                <p>
                  Country : <span>USA</span>
                </p>
              </div>
              <button className="add-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 16.6667V9.99999M10 9.99999V3.33333M10 9.99999H16.6667M10 9.99999H3.33334"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add
              </button>
            </div>
            <div className="item">
              <i className="fas fa-heart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" rx="4" fill="white" />
                  <path
                    d="M19 10.6617C19 14.2167 12.5 17.9998 12.5 17.9998C12.5 17.9998 6 14.2167 6 10.6617C6 5.83488 12.5 5.90006 12.5 10.1481C12.5 5.90006 19 5.96361 19 10.6617Z"
                    stroke="black"
                    strokeWidth="1.10308"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <img src="./src/assets/image11@1x.jpg" alt="Item 11" />
              <div className="item-header">
                <h1>Let There Be Rock</h1>
                <h2>AC/DC</h2>
              </div>
              <div className="item-text">
                <p>
                  Year : <span>1990</span>
                </p>
                <p>
                  Style : <span>Punk, Dub, Funk</span>
                </p>
                <p>
                  Country : <span>USA</span>
                </p>
              </div>
              <button className="add-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 16.6667V9.99999M10 9.99999V3.33333M10 9.99999H16.6667M10 9.99999H3.33334"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add
              </button>
            </div>
            <div className="item">
              <i className="fas fa-heart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" rx="4" fill="white" />
                  <path
                    d="M19 10.6617C19 14.2167 12.5 17.9998 12.5 17.9998C12.5 17.9998 6 14.2167 6 10.6617C6 5.83488 12.5 5.90006 12.5 10.1481C12.5 5.90006 19 5.96361 19 10.6617Z"
                    stroke="black"
                    strokeWidth="1.10308"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
              <img src="./src/assets/image12@1x.jpg" alt="Item 12" />
              <div className="item-header">
                <h1>Let There Be Rock</h1>
                <h2>AC/DC</h2>
              </div>
              <div className="item-text">
                <p>
                  Year : <span>1990</span>
                </p>
                <p>
                  Style : <span>Punk, Dub, Funk</span>
                </p>
                <p>
                  Country : <span>USA</span>
                </p>
              </div>
              <button className="add-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 16.6667V9.99999M10 9.99999V3.33333M10 9.99999H16.6667M10 9.99999H3.33334"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
