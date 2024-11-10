import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { Onboarding } from "@pages/onBoarding/Onboarding";
import { Login } from "@pages/login/Login";
import { SignUp } from "@pages/signUp/SignUp";
import { SignUpSubmit } from "@pages/signUp/SignUpSubmit";
import { NuguIntro } from "@pages/nuguIntro/NuguIntro";
import { WriteIntro } from "@pages/nuguIntro/WriteIntro";

import { NuguCreate } from "@pages/SignUp/NuguCreate";
import { NuguTestPage } from "@pages/nuguTest/NuguTest";
import { MakeNuguTest } from "@pages/nuguTest/MakeNuguTest";

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
        element: <NuguIntro />,
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
        path: "/test",
        element: <NuguTestPage />,
      },
      {
        path: "/maketest",
        element: <MakeNuguTest />,
      },
    ],
  },
]);

export default router;
