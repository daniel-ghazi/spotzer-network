import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./routing/AppRoutes";
import baseRouterPath from "./routing/baseRouterPath";
import { TasksProvider } from "./providers/TasksProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={baseRouterPath}>
      <TasksProvider>
        <AppRoutes />
      </TasksProvider>
    </BrowserRouter>
  </React.StrictMode>
);
