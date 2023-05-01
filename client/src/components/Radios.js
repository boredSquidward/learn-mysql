import React from "react";

import styles from "../styles/radios.module.css";

function Radios() {
  return (
    <div className={styles.container}>
      <lable for="taco">
        <input type="radio" name="options" value="taco" id="taco" required />
        taco
      </lable>
      <lable for="pizza">
        <input type="radio" name="options" value="pizza" id="pizza" required />
        pizza
      </lable>
      <lable for="hotdog">
        <input
          type="radio"
          name="options"
          value="hotdog"
          id="hotdog"
          required
        />
        hotdog
      </lable>
      <lable for="fries">
        <input type="radio" name="options" value="fries" id="fries" required />
        fries
      </lable>
      <lable for="chickens">
        <input
          type="radio"
          name="options"
          value="chickens"
          id="chickens"
          required
        />
        chickens
      </lable>
    </div>
  );
}

export default Radios;
