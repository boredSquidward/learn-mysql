import React from "react";

import styles from "../styles/name.module.css";

const Name = () => {
  const submitHandler = async (event) => {
    event.preventDefault();

    const input = event.target[0].value;

    const name = event.target[0].name;

    const headers = {
      body: JSON.stringify({ [name]: input }),
      "Content-Type": "application/json",
      method: "POST",
    };

    try {
      const res = await fetch("http://localhost:8000", headers);

      const data = await res.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <label>
          Name:
          <input type="text" name="name" />
          <button type="submit">Submit</button>
        </label>
      </form>
    </div>
  );
};

export default Name;
