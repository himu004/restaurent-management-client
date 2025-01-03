import { useEffect, useState } from "react";
import SectionTittle from "./SectionTittle";
import MenuItemCard from "./MenuItemCard";

const PopularMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(item => item.category === "popular");
        setMenus(popularItems);
      });
  }, []);
  console.log(menus);
  return (
    <section>
      <SectionTittle
        heading="Popular Menu"
        subHeading="Our Best Selling Items"
      />
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
        {
          menus.map(menu => <MenuItemCard key={menu.id} menu={menu} />)
        }
      </div>
    </section>
  );
};

export default PopularMenu;
