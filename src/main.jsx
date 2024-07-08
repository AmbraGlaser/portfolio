import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// pages
import AppLayout from "./pages/AppLayout";
import ErrorPage from "./pages/ErrorLayout";
// components
import Home from "./components/Home";
import About from "./components/About";

const routes = [
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    childern: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: "/portfolio" });

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
