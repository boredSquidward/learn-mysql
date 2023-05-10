import React from "react";

import Table from "./components/Table";
import styles from "./app.module.css";
import Form from "./components/Form";

function App() {
  return (
    <div className={styles.container}>
      <Form />
      <Table />
    </div>
  );
}

export default App;
