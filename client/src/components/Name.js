import React from "react";

import styles from "../styles/name.module.css";

const Name = () => {
  return (
    <div className={styles.container}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
    </div>
  );
};

export default Name;
