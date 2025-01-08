import FoodCard from "../../components/FoodCard";
import PropTypes from 'prop-types';

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};
OrderTab.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default OrderTab;
