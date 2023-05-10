import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import {
  getPrices,
  createOrder,
  getOrders,
  deleteOrder,
} from "./database/db.js";

const app = express();

dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.get("/", async (req, res) => {
  const orders = await getOrders();

  res.status(200).json({ status: "success", data: orders });
});

app.get("/prices", async (req, res) => {
  const prices = await getPrices();

  res.status(200).json({ status: "success", data: prices });
});

app.post("/form", async (req, res) => {
  const data = req.body;

  const [result] = await createOrder(data);

  res.status(201).json({ status: "success", data: result });
});

app.get("/delete/:id", async (req, res) => {
  const id = +req.params.id;

  const result = await deleteOrder(id);

  console.log(result);

  res.status(200).json({ status: "success", data: result });
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});
