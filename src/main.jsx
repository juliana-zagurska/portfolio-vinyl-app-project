import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Application } from "./Application.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./main.css";
import { NewSearchPage } from "./Pages/NewSearchPage";
import { MainLayout } from "./layouts/MainLayout.jsx";
import { VinylPage } from "./Pages/VinylPage/VinylPage.jsx";
import { SearchLayout } from "./layouts/SearchLayout.jsx";
import { SearchResultsPage } from "./Pages/SearchResultsPage/SearchResultsPage.jsx";
import { HomePage } from "./Pages/HomePage/HomePage.jsx";

const appElement = document.getElementById("app");
const root = createRoot(appElement);

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Application />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "search/results",
        element: <NewSearchPage />,
      },
      {
        path: "*",
        element: <div>Not found</div>,
      },
    ],
  },
]);
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <Application />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "vinyl/:id",
            element: <VinylPage />,
          },
        ],
      },
      {
        path: "search",
        element: <SearchLayout />,
        children: [
          {
            index: true,
            element: <NewSearchPage />,
          },
          {
            path: "results",
            element: <SearchResultsPage />,
          },
        ],
      },
      {
        path: "*",
        element: <div>Not found</div>,
      },
    ],
  },
]);
/*
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
*/
root.render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
