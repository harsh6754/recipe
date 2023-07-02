import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { RecipeContextProvider } from "./context/RecipeContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RecipeContextProvider>
      <Router>
        <App />
      </Router>
    </RecipeContextProvider>
  </StrictMode>
);
