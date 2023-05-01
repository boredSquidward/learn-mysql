import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).json({ status: "success", data: [] });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json({ status: "success", data: req.body });
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});
