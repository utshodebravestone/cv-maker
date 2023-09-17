import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/css/index.css";

import App from "./components/App.tsx";
import { AppStateProvider } from "./state/AppState.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppStateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppStateProvider>
);
