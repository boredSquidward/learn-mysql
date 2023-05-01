import React from "react";

import Name from "./components/Name";
import Search from "./components/Search";
import Table from "./components/Table";

import styles from "./app.module.css";

function App() {
  const [data, setData] = React.useState([]);

  const fetchDataHandler = async () => {
    try {
      const res = await fetch("http://localhost:8000");

      const data = await res.json();

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchDataHandler();

    console.log(data);
  }, []);

  return (
    <div className={styles.container}>
      <Name />
      <Search />
      <Table data={data} />
    </div>
  );
}

export default App;
