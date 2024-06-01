/** @format */

const express = require("express");
const {
  fetchImages,
  deleteImage,
  postImage,
} = require("../controller/imageController");
const upload = require("../middleware/multer");

const router = express.Router();

router
  .route("/")
  .get(fetchImages)
  .delete(deleteImage)
  .post(upload.single("picture"), postImage);

module.exports = router;
