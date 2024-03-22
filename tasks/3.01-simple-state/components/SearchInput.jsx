import styles from "./SearchInput.module.css";

function SearchInput({ maxLength, value, onChange, ...rest }) {
  const handleChange = (event) => {
    const newValue = event.target.value;
    if (maxLength && newValue.length > maxLength) {
      return;
    }
    onChange(newValue);
  };

  return (
    <div>
      <input
        placeholder="Filter by artist or title"
        className={styles.root}
        type="text"
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        {...rest}
      />
      <div>
        Characters: {value.length}/{maxLength || 100}
      </div>
    </div>
  );
}

export default SearchInput;
