import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";


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
        {
          path: "/our-menu",
          element: <OurMenu />,
        },
      ],
    },
  ]);

export default router;