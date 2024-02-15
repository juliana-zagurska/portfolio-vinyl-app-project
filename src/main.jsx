import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Application } from "./Application.jsx";
import "./main.css";

const appElement = document.getElementById("app");
const root = createRoot(appElement);

root.render(
  <StrictMode>
    <Application />
  </StrictMode>
);
