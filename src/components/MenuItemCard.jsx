import PropTypes from "prop-types";

const MenuItemCard = ({ menu }) => {
  const { name, recipe, image, category, price } = menu || {};

  return (
    <div className="md:flex gap-4 space-x-4 ">
      <img
        style={{ borderRadius: "0 400px 400px 400px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name} -------------- </h3>
        <p>{recipe}</p>
        <p>{category}</p>
      </div>

      <p className="text-yellow-500">${price}</p>
    </div>
  );
};
MenuItemCard.propTypes = {
  menu: PropTypes.shape({
    name: PropTypes.string,
    recipe: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default MenuItemCard;
