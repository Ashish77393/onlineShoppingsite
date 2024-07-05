import ClothCard from "./ClothList/ClothCard";
const ClothData = () => {
  const clothdata = [
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/u/h/x/-original-imagy3k8en75umhd.jpeg?q=70",
      name: "Men Self Design Polo Neck",
      start: "starts Form",
      price: " ₹599",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/d/y/m/m-azy-t-shirt-blu-hub-original-imagywv4hztvwjga.jpeg?q=70",
      name: "Blu Hub Shirt",
      start: "starts Form",
      price: "₹499",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/l/x/a/3xl-2499175-roadster-original-imagugftecudhecg.jpeg?q=70",
      name: "Men Colorblock Round Nec",
      start: "starts Form",
      price: "₹399",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/k/8/b/-original-imagyk8qaafzmfbc.jpeg?q=70",
      name: "Men Self Design Round Neck Polyester Black T-Shirt",
      start: "starts Form",
      price: "₹399",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/c/v/v/38-b401-black-dennis-lingo-original-imagevq2hjxsb8h3-bb.jpeg?q=70",
      name: "Dennis Lingo Men Cargos",
      start: "starts From",
      price: "₹799",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/cargo/r/x/r/m-olive-cargo-01-sprouted-original-imagsguqxveedtnd.jpeg?q=70",
      name: "SPROUTED Men Cargos",
      start: "starts Form",
      price: "₹799",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/e/u/s/36-united069-united-denim-original-imagyvjaggfvdweh.jpeg?q=70",
      name: "Men Slim Mid Rise Light Blue Jeans",
      start: "starts Form",
      price: "₹699",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/p/z/a/32-mss22mjn343-metronaut-original-imagtktxvgqbhz5c.jpeg?q=70",
      name: "Men Regular Mid Rise Light Blue Jeans",
      start: "starts Form",
      price: "₹799",
    },
  ];

  return (
    <div className="main-container">
      <ClothCard clothdata={clothdata} />
    </div>
  );
};
export default ClothData;
