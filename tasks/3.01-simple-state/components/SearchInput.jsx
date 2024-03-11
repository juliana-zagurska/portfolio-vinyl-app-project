import styles from "./SearchInput.module.css";
import { useState } from "react";

function SearchInput({ maxLength, value, onChange, ...rest }) {
  const [inputValue, setInputValue] = useState(value || "");

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (maxLength && newValue.length > maxLength) {
      return;
    }
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <input
        placeholder="Filter by artist or title"
        className={styles.root}
        type="text"
        value={inputValue}
        onChange={handleChange}
        maxLength={maxLength}
        {...rest}
      />
      <div>
        Characters: {inputValue.length}/{maxLength || 100}
      </div>
    </div>
  );
}

export default SearchInput;
