import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Root/RootLayout";
import HeroSection from "../HeroSection/HeroSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <HeroSection /> }],
  },
]);

export default router;
