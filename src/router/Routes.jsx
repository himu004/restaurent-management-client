import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


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
        {
          path: "/order/:category",
          element: <Order />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

export default router;