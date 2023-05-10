import React from "react";

import styles from "../styles/tableRow.module.css";

const TableRow = ({ data }) => {
  const deleteRowHandler = async () => {
    try {
      await fetch(`http://localhost:8000/delete/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <tr className={styles.container}>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.tel}</td>
      <td>{data.orders}</td>
      <td>{data.address}</td>
      <td>${data.price}</td>
      <td>{new Date(data.orderDate).toLocaleString()}</td>
      <td>
        <button onClick={deleteRowHandler}>❌</button>
      </td>
    </tr>
  );
};

export default TableRow;
