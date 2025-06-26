import * as React from "react";
import * as ReactClient from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return <h1>Hello React Router (data mode)</h1>;
    },
  },
]);

ReactClient.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
