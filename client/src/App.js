import React from "react";

import Search from "./components/Search";
import Table from "./components/Table";
import styles from "./app.module.css";
import Form from "./components/Form";

function App() {
  const [data, setData] = React.useState([]);

  return (
    <div className={styles.container}>
      <Form formData={(data) => setData(data)} />
      <Search />
      <Table data={data} />
    </div>
  );
}

export default App;
