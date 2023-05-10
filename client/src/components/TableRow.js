import React from "react";

import styles from "../styles/tableRow.module.css";

const TableRow = ({ data }) => {
  const [isInvisible, setIsInvisible] = React.useState(false);

  const deleteRowHandler = async () => {
    try {
      await fetch(`http://localhost:8000/delete/${data.id}`);
      setIsInvisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    !isInvisible && (
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
    )
  );
};

export default TableRow;
