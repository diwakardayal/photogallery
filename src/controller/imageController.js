/** @format */

const asyncHandler = require("../middleware/asyncHandler");
const Image = require("../db/models/image");
const cloudinary = require("../db/cloud");

const fetchImages = asyncHandler(async (req, res) => {
  const images = await Image.findAll();

  res.send(images);
});

const fetchImageById = asyncHandler((req, res) => {
  const { imageId } = req.params;
});

const postImage = asyncHandler(async (req, res) => {
  try {
    const { file } = req; // Get the file from the request
    console.log(file);

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Upload the file to Cloudinary using a Promise to handle the stream
    // eslint-disable-next-line promise/avoid-new
    const uploadResponse = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "photo_gallery" },
        // eslint-disable-next-line consistent-return
        (error, result) => {
          if (error) {
            return reject(error);
          }
          resolve(result);
        }
      );
      stream.end(file.buffer);
    });

    // Save image URL to your database
    const newImage = await Image.create({
      image_url: uploadResponse.secure_url,
    });

    console.log(uploadResponse.secure_url);

    res.status(201).json(newImage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});
const deleteImage = asyncHandler((req, res) => {
  const { imageId } = req.body;
});

module.exports = { fetchImages, fetchImageById, deleteImage, postImage };
