import Card from "./Card";
const CardList = ({data}) => {
  return (
    <>
      {data.map((data)=><Card key={data.name} img={data.url} name={data.name} start={data.strat} price={data.price}></Card>)}
      
    </>
  );
};
export default CardList;
