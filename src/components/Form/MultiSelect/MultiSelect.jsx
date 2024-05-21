import { ArrowUpIcon } from "../../Icons/ArrowUpIcon.jsx";
import { ArrowDownIcon } from "../../Icons/ArrowDownIcon.jsx";
import { Checkbox } from "../Checkbox";
import styles from "./MultiSelect.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

export const MultiSelect = ({
  value,
  onChange,
  options,
  placeholder,
  name,
  error,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const activeOptions = options.filter((option) =>
    value.includes(option.value)
  );

  // Dynamically create className with template literals based on conditions
  const buttonClasses = `${styles.root} ${isOpened ? styles.isActive : ""} ${
    error ? styles.isError : ""
  }`;

  return (
    <div className={styles.holder}>
      <input
        type="hidden"
        value={value.join(",")}
        name={`${name}-all`}
        {...props}
      />
      <button
        type="button"
        className={buttonClasses}
        onClick={() => setIsOpened(!isOpened)}
      >
        <div className={styles.innerContent}>
          {activeOptions?.length ? (
            <span className={styles.value}>
              {activeOptions.map((option) => option.label).join(", ")}
            </span>
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
              key={option.value}
              className={styles.option}
              type="button"
              onClick={(event) => {
                event.preventDefault();
                if (value.includes(option.value)) {
                  onChange(value.filter((item) => item !== option.value));
                } else {
                  onChange([...value, option.value]);
                }
              }}
            >
              <div className={styles.optionIndicator}>
                <Checkbox
                  name={name}
                  checked={value.includes(option.value)}
                  onChange={() => undefined}
                />
              </div>
              <div className={styles.optionLabel}>{option.label}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

MultiSelect.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string,
};
