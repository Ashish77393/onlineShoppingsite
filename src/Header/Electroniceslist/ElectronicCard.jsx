import Electronicitem from "./Electronicitem";
const ElectronicCard = ({ electdata }) => {
  return (
    <>
      {electdata.map((electdata) => (
        <Electronicitem
          key={electdata.name}
          image={electdata.url}
          name={electdata.name}
          start={electdata.start}
          price={electdata.price}
        ></Electronicitem>
      ))}
    </>
  );
};
export default ElectronicCard;
