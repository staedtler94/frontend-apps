import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
    {
      path: "/",
      loader: () => ({ message: "Hello Data Router!" }),
      Component: Layout,
    },
  ]);