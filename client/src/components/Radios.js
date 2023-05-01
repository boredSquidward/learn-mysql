import React from "react";

import styles from "../styles/radios.module.css";

function Radios() {
  return (
    <div className={styles.container}>
      <label for="taco">
        <input type="radio" name="options" value="taco" id="taco" required />
        taco
      </label>
      <label for="pizza">
        <input type="radio" name="options" value="pizza" id="pizza" required />
        pizza
      </label>
      <label for="hotdog">
        <input
          type="radio"
          name="options"
          value="hotdog"
          id="hotdog"
          required
        />
        hotdog
      </label>
      <label for="fries">
        <input type="radio" name="options" value="fries" id="fries" required />
        fries
      </label>
    </div>
  );
}

export default Radios;
