/**
 * eslint-disable import/no-extraneous-dependencies
 *
 * @format
 */

// eslint-disable-next-line import/no-extraneous-dependencies
const multer = require("multer");

const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = upload;
// const storage = multer.diskStorage({});

// const imageFileFilter = (req, file, cb) => {
//   if (!file.mimetype.startsWith("image")) {
//     cb("Supported only image file!", false);
//   }

//   cb(null, true);
// };

// exports.uploadImage = multer({ storage, imageFileFilter });
