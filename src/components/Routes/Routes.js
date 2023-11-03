import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Root/RootLayout";
import HomePage from "../HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);

export default router;
