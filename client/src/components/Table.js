import React from "react";

import styles from "../styles/table.module.css";
import TableRow from "./TableRow";

const Table = () => {
  const [dbData, setDbData] = React.useState(undefined);

  React.useEffect(() => {
    const getOrdersFromDB = async () => {
      const res = await fetch("http://localhost:8000");

      const { data } = await res.json();

      setDbData(data);
    };

    getOrdersFromDB();
  }, []);

  React.useEffect(() => {
    console.log(dbData);
  }, [dbData]);

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Tel</th>
            <th>Orders</th>
            <th>Address</th>
            <th>Total</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {dbData ? (
            dbData.map((item) => <TableRow data={item} key={item.id} />)
          ) : (
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
