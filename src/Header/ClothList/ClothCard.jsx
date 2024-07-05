import Clothitem from "./Clothitem";
const ClothCard = ({ clothdata }) => {
  return (
    <>
      {clothdata.map((clothdata) => (
        <Clothitem
          key={clothdata.name}
          image={clothdata.url}
          name={clothdata.name}
          start={clothdata.start}
          price={clothdata.price}
        ></Clothitem>
      ))}
    </>
  );
};
export default ClothCard;
