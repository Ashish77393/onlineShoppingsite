const Kidsitem = ({ image, name, start, price }) => {
  return (
    <>
      <div className="card Card">
        <img src={image} className="card-img-top" alt="grocery" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{start}</p>
          <p className="card-text">{price}</p>
          <button className="btn btn-success">Buy Now</button>
        </div>
      </div>
    </>
  );
};
export default Kidsitem;
