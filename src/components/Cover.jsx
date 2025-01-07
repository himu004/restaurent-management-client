import PropTypes from "prop-types";
import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 30 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-400}
    >
      <div
        className="hero h-[600px]"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">
              Discover our delicious menu and exceptional dining experience.
              Join us for a memorable meal in a warm and inviting atmosphere.
            </p>
            <button className="btn btn-primary">View Menu</button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

Cover.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Cover;
