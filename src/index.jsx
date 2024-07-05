import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Header/About";
import Feature from "./Header/Feature";
import Faqs from "./Header/Faqs";
import Pricing from "./Header/Pricing";
import Login from "./Header/Login";
import Home from "./Header/Home";
import Data from "./Data";
import ClothData from "./Header/ClothData";
import SignUpPage from "./Header/SignUpPage";
import Eletronicesdata from "./Header/Eletronicesdata";
import Kidsdata from "./Header/Kidsdata";
import Grocerydata from "./Header/Grocerydata";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "/Home", element: <Data /> },
      { path: "/About", element: <About /> },
      { path: "/Feature", element: <Feature /> },
      { path: "/Faqs", element: <Faqs /> },
      { path: "/Pricing", element: <Pricing /> },
      { path: "/Login", element: <Login /> },
      { path: "/SignUpPage", element: <SignUpPage /> },
      { path: "/Eletronices", element: <Eletronicesdata /> },
      { path: "/Kids", element: <Kidsdata /> },
        { path: "/Grocery", element: <Grocerydata /> },
      { path: "/Cloths", element: <ClothData /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
