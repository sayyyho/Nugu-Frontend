import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { Login } from "./pages/Login/Login";
import { Onboarding } from "./pages/Onboarding/Onboarding";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Onboarding />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
