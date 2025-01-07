import SectionTittle from "./SectionTittle";
import MenuItemCard from "./MenuItemCard";
import useMenu from "../hooks/useMenu";

const PopularMenu = () => {
  const [menus] = useMenu();
  const popular = menus.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTittle
        heading="Popular Menu"
        subHeading="Our Best Selling Items"
      />
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
        {popular.map((menu) => (
          <MenuItemCard key={menu._id} menu={menu} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
