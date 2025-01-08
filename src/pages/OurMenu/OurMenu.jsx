import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTittle from "../../components/SectionTittle";
import MenuCategory from "./MenuCategory/MenuCategory";

const OurMenu = () => {
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Our Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"} />
      <div className="py-5">
        <SectionTittle subHeading={"Dont Miss"} heading={"Todays Offer"} />
        <MenuCategory items={offered} />
        <MenuCategory items={desserts} title="desserts" img={dessertImg} />
        <MenuCategory items={pizza} title="pizza" img={pizzaImg} />
        <MenuCategory items={salad} title="salad" img={saladImg} />
        <MenuCategory items={soup} title="soup" img={soupImg} />
      </div>
    </div>
  );
};

export default OurMenu;
