import React from "react";

import Name from "./components/Name";
import Search from "./components/Search";
import Table from "./components/Table";
import styles from "./app.module.css";
import Radios from "./components/Radios";
import Checkboxes from "./components/Checkboxes";

function App() {
  const [data, setData] = React.useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(e);

    const name = e.target[1].value;

    const options = [
      e.target[2].checked && e.target[2].value,
      e.target[3].checked && e.target[3].value,
      e.target[4].checked && e.target[4].value,
      e.target[5].checked && e.target[5].value,
    ];

    const checkboxes = [
      e.target[6].checked && e.target[6].value,
      e.target[7].checked && e.target[7].value,
      e.target[8].checked && e.target[8].value,
      e.target[9].checked && e.target[9].value,
    ];

    const formData = {
      name,
      options: options.filter((item) => item !== false),
      checkboxes: checkboxes.filter((item) => item !== false),
    };

    const body = JSON.stringify(formData);

    try {
      const res = await fetch("http://localhost:8000/form", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body,
      });

      const data = await res.json();

      console.log(data);

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>order food</legend>
          <Name />
          <Radios />
          <Checkboxes />
          <button type="submit">submit</button>
        </fieldset>
      </form>
      <Table data={data} />
      <Search />
    </div>
  );
}

export default App;

// const fetchDataHandler = async () => {
//   try {
//     const res = await fetch("http://localhost:8000");

//     const data = await res.json();

//     setData(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// React.useEffect(() => {
//   fetchDataHandler();

//   console.log(data);
// }, []);
