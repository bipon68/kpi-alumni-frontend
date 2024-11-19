import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouteHandler } from "./RouteHandler";
import "./assets/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouteHandler />
  </StrictMode>
);
