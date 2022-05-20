import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <div className="Title">
        <h1>Cv Generator Odin Proyect</h1>
      </div>
      <div>
      <App />

      </div>

    </div>
  </React.StrictMode>
);