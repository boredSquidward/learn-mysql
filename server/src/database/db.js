import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  })
  .promise();

export const getPrices = async () => {
  const [rows] = await pool.query("SELECT * FROM foodPrices");

  return rows;
};

export const getOrders = async () => {
  const [rows] = await pool.query("SELECT * FROM orders");

  return rows;
};

export const deleteOrder = async (id) =>
  await pool.query("DELETE FROM orders WHERE id = ?", [id]);

export const createOrder = async (data) => {
  console.log(data);
  const result = await pool.query(
    "INSERT INTO orders (name, orders, address, orderDate, price, tel) VALUES (?,?,?,?,?,?)",
    [data.name, data.orders, data.address, data.orderDate, data.price, data.tel]
  );

  return result;
};
