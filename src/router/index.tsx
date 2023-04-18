import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <>Test view</>,
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);
