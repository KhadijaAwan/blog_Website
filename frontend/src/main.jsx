import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Authentication_Provider } from "./context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Authentication_Provider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Authentication_Provider>
);
