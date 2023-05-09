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

export const createOrder = async (
  customersName,
  foodOrders,
  address,
  date,
  totalPrice
) => {
  const result = await pool.query("INSERT INTO orders VALUES (?,?,?,?,?)", [
    customersName,
    foodOrders,
    address,
    date,
    totalPrice,
  ]);

  return result;
};
