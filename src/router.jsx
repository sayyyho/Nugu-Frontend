import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import { Onboarding } from "@pages/onBoarding/Onboarding";
import { Login } from "@pages/login/Login";
import { SignUp } from "@pages/signUp/SignUp";
import { SignUpSubmit } from "@pages/signUp/SignUpSubmit";
import { NuguIntro } from "@pages/nuguIntro/NuguIntro";
import { WriteIntro } from "@pages/nuguIntro/WriteIntro";

import { NuguCreate } from "@pages/signUp/NuguCreate";
import { NuguTestPage } from "@pages/nuguTest/NuguTest";
import { MakeNuguTest } from "@pages/nuguTest/MakeNuguTest";
import { NuguChallenge } from "@pages/nuguTest/NuguChallenge";
import { ChallengerTest } from "@pages/nuguTest/ChallengerTest";
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
        //소유자뷰 누구테스트흄
        path: "/test",
        element: <NuguTestPage />,
      },
      {
        path: "/test/make",
        element: <MakeNuguTest />,
      },
      {
        //접속자뷰 누구테스트홈
        path: "/challenge",
        element: <NuguChallenge />,
      },
      {
        //
        path: "/challenge/test",
        element: <ChallengerTest />,
      },
    ],
  },
]);

export default router;
