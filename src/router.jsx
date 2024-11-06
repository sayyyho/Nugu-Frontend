import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { Login } from "./pages/Login/Login";
import { Onboarding } from "./pages/Onboarding/Onboarding";
import { SignUp } from "@pages/SignUp/SignUp";
import { SignUpSubmit } from "@pages/SignUp/SignUpSubmit";
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
      {
        path: "/signUp/submit",
        element: <SignUpSubmit />,
      },
    ],
  },
]);

export default router;
