import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./page/Home";
import Login from "./pages/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
        path : "/About",
        element : <About />
    },
    {
        path: "/login",
        element: <Login />
    }
  ]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);