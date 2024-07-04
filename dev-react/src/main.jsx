import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import City from "./pages/City.jsx";
import Analytics from "./pages/Analytics.jsx";
import Contact from "./pages/Contact.jsx";
import "./index.css";
import data from "../data.json";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => data,
      },
      {
        path: "/country/:pays",
        element: <City />,
        loader: ({ params }) =>
          Object.values(data).filter((country) => (country.pays = params.pays)),
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
