import { Link } from "react-router-dom";
import Cover from "../../../components/Cover";
import MenuItemCard from "../../../components/MenuItemCard";
import PropTypes from 'prop-types';

const MenuCategory = ({items, title, img}) => {
  return (
    <div>
{ title && <Cover img={img} title={title} />}
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
        {items.map((menu) => (
          <MenuItemCard key={menu._id} menu={menu} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={`/order/${title}`} className="btn btn-outline border-0 border-b-4 my-4">Order Now</Link>
      </div>
      
    </div>
  );
};
MenuCategory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  img: PropTypes.string,
};


export default MenuCategory;
