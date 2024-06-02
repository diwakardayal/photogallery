/** @format */

const express = require("express");

const router = express.Router();
const userRouter = require("./userRouter");
const imageRouter = require("./imageRoutes");

router.use("/api/user", userRouter);
router.use("/api/working", (req, res) => {
  res.send("working");
});
router.use("/api/image", imageRouter);

module.exports = router;
