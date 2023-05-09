import React from "react";

import styles from "../styles/search.module.css";

const Search = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <input type="search" name="search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
