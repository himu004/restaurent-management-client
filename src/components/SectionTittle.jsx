

// eslint-disable-next-line react/prop-types
const SectionTittle = ({heading, subHeading}) => {
    return (
        <div className="text-center">
            <p className="text-md text-yellow-400 italic">-- {subHeading} --</p>
            <h3 className="text-2xl font-bold border-t-2 border-b-2 inline-block py-2 my-5 px-5">{heading}</h3>
        </div>
    );
};

export default SectionTittle;