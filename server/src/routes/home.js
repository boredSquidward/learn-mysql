import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ status: "success", data: [] });
});

export default router;
