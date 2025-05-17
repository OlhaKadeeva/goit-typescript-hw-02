import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactModal from "react-modal";
import "./index.css";
import "modern-normalize";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

ReactModal.setAppElement("#root");

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);
