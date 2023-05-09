import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { getPrices, createOrder } from "./database/db.js";

const app = express();

dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("server responses!");
});

app.get("/prices", async (req, res) => {
  const prices = await getPrices();

  res.status(200).json(prices);
});

app.post("/form", (req, res) => {
  console.log(req.body);

  res.status(201).json({ status: "success", data: req.body });
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});
