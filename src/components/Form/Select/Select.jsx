import PropTypes from "prop-types";
import styles from "./Select.module.css";
import { useState } from "react";
import { ArrowUpIcon } from "../../Icons/ArrowDownIcon.jsx";
import { ArrowDownIcon } from "../../Icons/ArrowUpIcon.jsx";

export const Select = ({
  value,
  onChange,
  options,
  placeholder,
  error,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const activeOption = options.find((option) => option.value === value);

  const buttonClasses = `${styles.root} ${isOpened ? styles.isActive : ""} ${
    error ? styles.isError : ""
  }`;

  return (
    <div className={styles.holder}>
      <input type="hidden" value={value} {...props} />
      <button
        type="button"
        className={buttonClasses}
        onClick={() => setIsOpened(!isOpened)}
      >
        <div className={styles.innerContent}>
          {activeOption ? (
            <span className={styles.value}>{activeOption.label}</span>
          ) : (
            <span className={styles.placeholder}>{placeholder}</span>
          )}
          {isOpened ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
      </button>

      {error && <div className={styles.error}>{error}</div>}

      {isOpened && (
        <div aria-label="options" className={styles.dropdown}>
          {options.map((option) => (
            <button
              data-testid={`option_${option.value}`}
              key={option.value}
              className={styles.option}
              type="button"
              onClick={(event) => {
                event.preventDefault();
                onChange(option.value);
                setIsOpened(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};
