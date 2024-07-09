import React from "react";
import Login from "../pages/auth/login";
import PreRegistraion from "../pages/auth/registration/PreRegistraion";
import OtpVerification from "../pages/auth/registration/OtpVerification";
import PostRegistration from "../pages/auth/registration/PostRegistration";
import Home from "../pages/home/indes";
import MainHome from "../pages/home/MainHome";
import TalentHome from "../pages/talent-page";
import TalentedUser from "../pages/talent-user";

const publicRoutesList = [
  { path: "/", element: <MainHome /> },
  { path: "/login", element: <Login /> },
  { path: "/pre-registration", element: <PreRegistraion /> },
  { path: "/otp-verification", element: <OtpVerification /> },
  { path: "/post-registration", element: <PostRegistration /> },
  { path: "/talents", element: <TalentHome /> },
  { path: `/talentedUser/:id`, element: <TalentedUser /> },
];

const privateRoutesList = [
  // {path:"/*", element : <Home />}
];

export { publicRoutesList, privateRoutesList };
