import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { Login } from "@pages/login/Login";
import { Onboarding } from "@pages/Onboarding/Onboarding";
import { SignUp } from "@pages/SignUp/SignUp";
import { SignUpSubmit } from "@pages/SignUp/SignUpSubmit";
import { NuguIntroPage } from "@pages/nuguIntro/NuguIntro";
import { WriteIntro } from "@pages/nuguIntro/WriteIntro";
import { NuguCreate } from "@pages/SignUp/NuguCreate";
import { NuguTestNonePage } from "@pages/nuguTest/NuguTestNone";
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
      {
        path: "/intro",
        element: <NuguIntroPage />,
      },
      {
        path: "/intro/write",
        element: <WriteIntro />,
      },
      {
        path: "/signUp/create",
        element: <NuguCreate />,
      },
      {
        path: "/testnone",
        element: <NuguTestNonePage />,
      },
    ],
  },
]);

export default router;
