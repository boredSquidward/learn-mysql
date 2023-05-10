import React from "react";

import styles from "../styles/table.module.css";
import TableRow from "./TableRow";

const Table = ({ realTimeData }) => {
  const [dbData, setDbData] = React.useState(undefined);

  React.useEffect(() => {
    const getOrdersFromDB = async () => {
      const res = await fetch("http://localhost:8000");

      const { data } = await res.json();

      setDbData(data);
    };

    getOrdersFromDB();
  }, []);

  const firstCondition = () => !dbData && !realTimeData;

  const secondCondition = () =>
    dbData?.length === 0 && realTimeData?.length === 0;

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
          {firstCondition() ||
            (secondCondition() && (
              <tr>
                <td colSpan={8} style={{ textAlign: "center" }}>
                  No Data
                </td>
              </tr>
            ))}
          {realTimeData &&
            realTimeData.map((item) => <TableRow data={item} key={item.id} />)}
          {dbData &&
            dbData.map((item) => <TableRow data={item} key={item.id} />)}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
