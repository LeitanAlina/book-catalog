
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Subscribe from "./pages/Subscribe";
import NotFound from "./pages/NotFound";
import Books, { loader as booksLoader } from "./pages/Books";
import BookDetails, {
  loader as bookDetailsLoader
} from "./pages/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "books",
        loader: booksLoader,
        element: <Books />
      },
      {
        path: "books/:id",
        loader: bookDetailsLoader,
        element: <BookDetails />
      },
      {
        path: "subscribe",
        element: <Subscribe />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
