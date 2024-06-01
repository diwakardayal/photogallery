/** @format */

import { createContext, useState } from "react";
import { fetchImages } from "../services/image";

export const ImageContext = createContext();

// eslint-disable-next-line react/prop-types
export default function ImageProvider({ children }) {
  const [images, setImages] = useState([]);

  async function getImages() {
    const response = await fetchImages();
    console.log(response.data);
    setImages(response.data);
  }

  return (
    <ImageContext.Provider value={{ images, getImages }}>
      {children}
    </ImageContext.Provider>
  );
}
