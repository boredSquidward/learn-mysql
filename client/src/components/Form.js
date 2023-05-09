import React from "react";

import Address from "./Address";
import Name from "./Name";
import Foods from "./Foods";
import MobileNum from "./MobileNum";
import styles from "../styles/form.module.css";
import { formOutPutHandler } from "../func/formOutPutHandler";

const Form = () => {
  const submitHandler = async (e) => {
    e.preventDefault();

    const order = formOutPutHandler(e);

    try {
      const res = await fetch("http://localhost:8000/form", {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
        method: "POST",
      });

      await res.json();
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
