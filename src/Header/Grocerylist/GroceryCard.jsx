import Groceryitem from "./Groceryitem";
const GroceryCard = ({ grocdata }) => {
  return (
    <>
      {grocdata.map((grocdata) => (
        <Groceryitem
          key={grocdata.name}
          image={grocdata.url}
          name={grocdata.name}
          start={grocdata.start}
          price={grocdata.price}
        ></Groceryitem>
      ))}
    </>
  );
};
export default GroceryCard;
