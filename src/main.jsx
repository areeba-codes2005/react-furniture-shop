import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { StrictMode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import App component
import App from "./App.jsx";

// Initialize AOS
AOS.init({
  duration: 1000, // animation duration in ms
  once: true, // whether animation should happen only once
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
