import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
import PopularMenu from "../../components/PopularMenu";
import Featured from "./Featured/Featured";


const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <PopularMenu />
            <Featured />
        </div>
    );
};

export default Home;