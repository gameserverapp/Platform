import React from "react";
import styles from "./styles.module.css";
function FormSelect({ value, options, onChange }) {
  if (!Array.isArray(options) || options.length === 0) {
    return null;
  }
  return (
    <select className={styles.selectInput} value={value} onChange={onChange}>
      {options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}
export default FormSelect;
