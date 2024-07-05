
const Card = ({img,name,start,price}) => {
  const fun=()=>{
    console.log("clicked");
  }
  return (
    <div className="card Card">
      <img
        src={img}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body ">
        <h5 className="card-title">{name}</h5>
        <p className="card-text paragraph">Starts From{start}</p>

        <p className="card-text paragraph"> ₹{price}</p>
        <button className="btn btn-success">
          BUY NOW
        </button>
      </div>
    </div>
  );
};
export default Card;
