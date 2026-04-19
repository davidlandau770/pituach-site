import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./global/routes/router/Router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
);
