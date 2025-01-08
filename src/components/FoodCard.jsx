import PropTypes from 'prop-types';

const FoodCard = ({item}) => {
    const { name, recipe, image, price } = item || {};
  return (
    <div className="card bg-base-100 shadow-xl py-5">
      <figure>
        <img
          src={image}
          alt={name}
            className="rounded-lg shadow-lg"
        />
      </figure>
      <p className="absolute bg-slate-900 text-white right-6 top-6 py-1 px-4 rounded-2xl">${price}</p>
      <div className="card-body justify-center items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-neutral">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    recipe: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};



export default FoodCard;
