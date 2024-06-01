/** @format */

import axios from "axios";

async function fetchImages() {
  const res = await axios.get("/api/image/");
  return res.data;
}

async function deleteImage(imageId) {
  const res = await axios.delete("/api/image/", {
    data: imageId,
  });
  return res;
}

async function postImage(formData) {
  const res = await axios.post("/api/image/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
}
export { fetchImages, deleteImage, postImage };
