import SectionTittle from "../../../components/SectionTittle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10">
            <SectionTittle heading="Featured Items" subHeading="Check it Out" />
            <div className="py-20 px-36 gap-10 md:flex justify-between items-center">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="space-y-5">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quas? Quam mollitia excepturi pariatur asperiores similique, sed quos eaque placeat praesentium in laboriosam velit fugit veritatis dolores suscipit iusto illum consectetur vero. Maxime quam nemo consequuntur cupiditate esse illum aperiam.</p>
                    <button className="btn btn-neutral btn-outline">Order New</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;