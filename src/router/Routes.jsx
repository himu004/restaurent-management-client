import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <div>404</div>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

export default router;