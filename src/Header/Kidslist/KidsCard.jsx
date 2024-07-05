import Kidsitem from "./Kidsitem";
const KidsCard = ({ Kidsdata }) => {
  return (
    <>
      {Kidsdata.map((Kidsdata) => (
        <Kidsitem
          key={Kidsdata.name}
          image={Kidsdata.url}
          name={Kidsdata.name}
          start={Kidsdata.start}
          price={Kidsdata.price}
        ></Kidsitem>
      ))}
    </>
  );
};
export default KidsCard;
