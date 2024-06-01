/** @format */

import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { ImageContext } from "../context/ImageProvider";

export const useAuth = () => useContext(AuthContext);
export const useImage = () => useContext(ImageContext);
