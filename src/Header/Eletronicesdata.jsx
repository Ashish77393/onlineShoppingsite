import ElectronicCard from "./Electroniceslist/ElectronicCard";

const Eletronicesdata = () => {
  const electdata = [
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/shaver/4/f/c/et-179-4-in-1-waterproof-ipx6-electric-shaver-trimmer-for-men-original-imagkgsjpyusa6jh.jpeg?q=70",
      name: "Phillips Trimmer",
      start: "starts Form",
      price: " ₹1199",
    },
    {
      url: "https://m.media-amazon.com/images/I/710PDXvxeKL._AC_UY327_FMwebp_QL65_.jpg",
      name: "Monitor",
      start: "starts Form",
      price: "₹7499",
    },
    {
      url: "https://rukminim2.flixcart.com/image/200/200/xif0q/printer/8/s/z/l3210-epson-original-imagynhqgeachvtw.jpeg?q=70",
      name: "Printers",
      start: "starts Form",
      price: "₹3999",
    },
    {
      url: "https://rukminim2.flixcart.com/image/200/200/xif0q/projector/r/g/x/o9-pro-zen-automatic-android-24-eo9025-full-hd-egate-original-imagtjpjwjjhyuaj.jpeg?q=70",
      name: "Top Selling Projecter",
      start: "starts Form",
      price: "₹6499",
    },
    {
      url: "https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/m/c/4/sony-apsc-ilce-6100-b-in5-mirrorless-original-imafm6nu2zq8xstc.jpeg?q=70",
      name: "Top Camera best Selling of Year",
      start: "starts From",
      price: "₹4999",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/g/w/4/-original-imagxp8uu5pequex.jpeg?q=70",
      name: "Noise Icon Watch",
      start: "starts Form",
      price: "₹1299",
    },
    {
      url: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/t/1/n/-original-imagxp8uju4vcafd.jpeg?q=70",
      name: "Fire-Boltt Rise Watch",
      start: "starts Form",
      price: "₹1399",
    },
    {
      url: "https://rukminim2.flixcart.com/image/312/312/kulk9zk0/television/a/k/g/rmv2101-realme-original-imag7zh4etze62zy.jpeg?q=70",
      name: "Realme 80 Neo LED TV",
      start: "starts Form",
      price: "₹9999",
    },
  ];
  return (
    <div className="main-container">
      <ElectronicCard electdata={electdata} />
    </div>
  );
};
export default Eletronicesdata;
