import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

const pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })
  .promise();

export const fetchAllUsersFromUsersTable = async () => {
  const [rows] = await pool.query("SELECT * FROM users");

  return rows;
};

export const fetchUserFromUsersTable = async (id) => {
  const [result] = await pool.query("SELECT * FROM USERS WHERE Id = ?", [id]);

  return result[0];
};

export const addUserToUsersTable = async (username, date) => {
  const result = await pool.query(
    "INSERT INTO users (Username, EnterDate) VALUES (?, ?)",
    [username, date]
  );

  return result;
};

export const deleteUserFromUsersTable = async (id) => {
  const result = await pool.query("DELETE FROM users WHERE Id = ?", [id]);

  return result;
};

console.log(await fetchAllUsersFromUsersTable());
pool.end();
