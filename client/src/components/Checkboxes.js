import React from "react";

import styles from "../styles/checkboxes.module.css";

function Checkboxes() {
  return (
    <div className={styles.container}>
      <input type="checkbox" id="salad" value="salad" />
      <label for="salad">salad</label>
      <input type="checkbox" id="coca" value="coca" />
      <label for="coca">coca</label>
      <input type="checkbox" id="soda" value="soda" />
      <label for="soda">soda</label>
      <input type="checkbox" id="catch-ups" value="catch-ups" />
      <label for="catch-ups">catch-ups</label>
    </div>
  );
}

export default Checkboxes;
