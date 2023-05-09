import React from "react";

import Address from "./Address";
import Name from "./Name";
import Foods from "./Foods";
import MobileNum from "./MobileNum";
import styles from "../styles/form.module.css";

const Form = ({ formData }) => {
  const submitHandler = async (e) => {
    e.preventDefault();

    const name = e.target[1].value;

    const food = [
      e.target[3].value === "" ? 0 : Number.parseInt(e.target[3].value),
      e.target[4].value === "" ? 0 : Number.parseInt(e.target[4].value),
      e.target[5].value === "" ? 0 : Number.parseInt(e.target[5].value),
      e.target[6].value === "" ? 0 : Number.parseInt(e.target[6].value),
    ];

    const address = e.target[7].value;

    const order = {
      address,
      food,
      name,
    };

    const body = JSON.stringify(order);

    try {
      const res = await fetch("http://localhost:8000/form", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body,
      });

      const data = await res.json();

      console.log(data);

      formData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.container}>
      <fieldset style={{ padding: "10px" }}>
        <legend>Order Your Mill</legend>
        <Name />
        <MobileNum />
        <Foods />
        <Address />
        <input type="submit" style={{ display: "block", width: "100%" }} />
      </fieldset>
    </form>
  );
};

export default Form;
