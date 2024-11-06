import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { Login } from "./pages/Login/Login";
import { Onboarding } from "./pages/Onboarding/Onboarding";
import { SignUp } from "@pages/SignUp/SignUp";
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
      {
        path: "/signUp/:page",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
