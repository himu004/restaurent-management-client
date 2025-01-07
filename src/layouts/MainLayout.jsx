import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const MainLayout = () => {
  return (
    <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
