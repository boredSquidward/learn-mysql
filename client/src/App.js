import React from "react";

import Search from "./components/Search";
import Table from "./components/Table";
import styles from "./app.module.css";
import Form from "./components/Form";

function App() {
  return (
    <div className={styles.container}>
      <Form />
      <Search />
      <Table />
    </div>
  );
}

export default App;
