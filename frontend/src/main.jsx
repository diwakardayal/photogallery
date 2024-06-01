/** @format */

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./context/AuthProvider.jsx";
import ImageProvider from "./context/ImageProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <ImageProvider>
        <App />
      </ImageProvider>
    </AuthProvider>
  </BrowserRouter>
);
