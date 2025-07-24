import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Pages/Components/App/App.jsx";
import "./tailwind.css";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
