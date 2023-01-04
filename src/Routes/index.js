import { createBrowserRouter } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Layout } from "../shared/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
