import GroceryCard from "./Grocerylist/GroceryCard";
const Grocerydata = () => {
  const grocdata = [
    {
      url: "https://tse3.mm.bing.net/th?id=OIP.6mk9g5SIdipIajVhhg129gHaHa&pid=Api&P=0&h=180",
      name: "Classic Kachi Ghani Mustard Oil",
      start: "starts Form",
      price: " ₹99",
    },
    {
      url: "https://rukminim2.flixcart.com/image/280/280/kqidx8w0/edible-oil/u/4/x/kachi-ghani-can-mustard-oil-fortune-original-imag4gbyyr2jzfdq.jpeg?q=70",
      name: "Fortune Premium kachi ghani pure Mustard Oil",
      start: "starts Form",
      price: "₹199",
    },
    {
      url: "https://tse4.mm.bing.net/th?id=OIP.pslS_5SX0cyMM9TAPnQfhQHaHa&pid=Api&P=0&h=180",
      name: "BRITANNIA Pure Cow Ghee 1 L ",
      start: "starts Form",
      price: "₹599",
    },
    {
      url: "https://tse1.mm.bing.net/th?id=OIP.GKOnQBWYKMjR0eM1eaNs7AHaHa&pid=Api&P=0&h=180",
      name: "ANKUR Filtered Groundnut Oil Tin",
      start: "starts Form",
      price: "₹399",
    },
    {
      url: "https://rukminim2.flixcart.com/image/280/280/ksdjma80/ready-mix/q/c/u/rice-idli-ready-mix-breakfast-mix-mtr-original-imag5yemrcfcfwn7.jpeg?q=70",
      name: "MTR Rice Idli Ready Mix 500 g",
      start: "starts From",
      price: "₹103",
    },
    {
      url: "https://rukminim2.flixcart.com/image/280/280/kfr5le80/ready-mix/g/d/8/300-instant-rabdi-dessert-mix-pack-of-3-x-100g-dessert-mix-gits-original-imafw5h97edhkhdb.jpeg?q=70",
      name: "Gits Rabdi Instant Dessert Mix 100 g",
      start: "starts Form",
      price: "₹79",
    },
    {
      url: "https://rukminim2.flixcart.com/image/280/280/xif0q/snack-savourie/p/r/i/1-navratna-mix-sub-kuch-1-pouch-bikaji-original-imaghzvqgzztn8ez.jpeg?q=70",
      name: "Bikaji Navratna Mix Sub-kuch (Mixture)",
      start: "starts Form",
      price: "₹179",
    },
    {
      url: "https://rukminim2.flixcart.com/image/280/280/xif0q/snack-savourie/t/8/x/-original-imaggrakmzxqe8ef.jpeg?q=70",
      name: "Bikano Aloo Bhujia (Namkeen)",
      start: "starts Form",
      price: "₹199",
    },
  ];
  return (
    <div className="main-container">
      <GroceryCard grocdata={grocdata} />
    </div>
  );
};
export default Grocerydata;
