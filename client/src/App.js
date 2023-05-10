import React from "react";

import Table from "./components/Table";
import styles from "./app.module.css";
import Form from "./components/Form";

function App() {
  const [data, setData] = React.useState(undefined);

  return (
    <div className={styles.container}>
      <Form dataHandler={(realTimeStuff) => setData(realTimeStuff)} />
      <Table realTimeData={data} />
    </div>
  );
}

export default App;
