import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Root/RootLayout";
import HomePage from "../HomePage/HomePage";
import Jewelry from "../Pages/Jewelry";
import Collection from "../Pages/Collection";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/jewelry",
        element: <Jewelry />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
