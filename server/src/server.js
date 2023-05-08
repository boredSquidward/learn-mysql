import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("ok");
});

app.post("/form", (req, res) => {
  res.status(200).json({ status: "success", data: req.body });
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});
