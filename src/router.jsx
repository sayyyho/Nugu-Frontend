import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { LoginPage } from "./pages/Login/Login";
import { SignupPage } from "./pages/Signup/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
]);

export default router;
