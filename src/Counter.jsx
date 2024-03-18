/* eslint-disable no-console */
import { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    console.log("Current value:", newValue);
  };

  return (
    <>
      <input type="number" value={value} onChange={handleChange} />
    </>
  );
};
