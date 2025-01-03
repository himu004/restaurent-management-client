import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
import PopularMenu from "../../components/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <PopularMenu />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;