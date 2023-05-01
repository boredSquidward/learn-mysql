import React from "react";

import styles from "../styles/table.module.css";

const Table = ({ data }) => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5} style={{ textAlign: "center" }}>
              No Data
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
