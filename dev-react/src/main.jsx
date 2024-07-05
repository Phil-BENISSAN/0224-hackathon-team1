import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import City from "./pages/City.jsx";
import Analytics from "./pages/Analytics.jsx";
import Contact from "./pages/Contact.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("http://localhost:8000/")
            .then((res) => res.json())
            .then((data) => data.donnees)
            .catch((error) => console.error(error)),
      },
      {
        path: "/country/:id",
        element: <City />,
        loader: () =>
          fetch("http://localhost:8000/")
            .then((res) => res.json())
            .then((data) => data.donnees)
            .catch((error) => console.error(error)),
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
